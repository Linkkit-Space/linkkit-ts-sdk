import { useEffect, useMemo } from "react";

export type AnalyticsMetadata = Record<string, unknown>;

export type AnalyticsOptions = {
  publishableKey: string;
  domainsConfig?: { outbound?: string[] };
  apiUrl?: string;
  cookieDomain?: string;
  cookieDays?: number;
};

export type TrackLeadOptions = {
  customerExternalId: string;
  eventName?: string;
  customerName?: string;
  customerEmail?: string;
  metadata?: AnalyticsMetadata;
};

export type TrackSaleOptions = {
  customerExternalId: string;
  amount: number;
  currency?: string;
  paymentProcessor?: string;
  invoiceId?: string;
  customerName?: string;
  customerEmail?: string;
  metadata?: AnalyticsMetadata;
};

const DEFAULT_API_URL = "https://api.uselinkkit.com";
const CLICK_ID = "lkclid";

function host(value: string): string {
  const hostname = value.replace(/^https?:\/\//i, "").split("/")[0] ?? "";
  return (hostname.split(":")[0] ?? "").toLowerCase();
}

export function getClickId(): string | null {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/(?:^|; )lkclid=([^;]*)/);
    if (match?.[1]) return decodeURIComponent(match[1]);
  }
  if (typeof localStorage !== "undefined") {
    try { return localStorage.getItem(CLICK_ID); } catch { /* private browsing */ }
  }
  return null;
}

export function captureClickId(options: Pick<AnalyticsOptions, "cookieDays" | "cookieDomain"> = {}): string | null {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get(CLICK_ID);
  if (!value) return getClickId();

  const expires = new Date(Date.now() + (options.cookieDays ?? 30) * 864e5).toUTCString();
  const domain = options.cookieDomain ? `; Domain=${host(options.cookieDomain)}` : "";
  document.cookie = `${CLICK_ID}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${domain}`;
  try { localStorage.setItem(CLICK_ID, value); } catch { /* private browsing */ }
  return value;
}

export class LinkkitAnalytics {
  private cleanup: (() => void) | undefined;

  constructor(private readonly options: AnalyticsOptions) {
    if (!options.publishableKey) throw new Error("Linkkit publishableKey is required");
    captureClickId(options);
  }

  async trackLead(options: TrackLeadOptions): Promise<unknown> {
    return this.send("lead", {
      event_name: options.eventName ?? "Lead",
      customer_external_id: options.customerExternalId,
      customer_name: options.customerName,
      customer_email: options.customerEmail,
      metadata: options.metadata,
    });
  }

  async trackSale(options: TrackSaleOptions): Promise<unknown> {
    return this.send("sale", {
      customer_external_id: options.customerExternalId,
      customer_name: options.customerName,
      customer_email: options.customerEmail,
      amount: options.amount,
      currency: options.currency ?? "usd",
      payment_processor: options.paymentProcessor,
      invoice_id: options.invoiceId,
      metadata: options.metadata,
    });
  }

  startOutboundTracking(): void {
    if (typeof document === "undefined" || this.cleanup) return;
    const domains = (this.options.domainsConfig?.outbound ?? []).map(host).filter(Boolean);
    if (!domains.length) return;
    const handler = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(element instanceof HTMLAnchorElement)) return;
      let url: URL;
      try { url = new URL(element.href, window.location.href); } catch { return; }
      if (!["http:", "https:"].includes(url.protocol) || !domains.includes(url.hostname.toLowerCase())) return;
      void this.send("open", { outbound_domain: url.hostname, outbound_url: url.href });
    };
    document.addEventListener("click", handler, true);
    this.cleanup = () => document.removeEventListener("click", handler, true);
  }

  stopOutboundTracking(): void {
    this.cleanup?.();
    this.cleanup = undefined;
  }

  private async send(type: "lead" | "sale" | "open", payload: Record<string, unknown>): Promise<unknown> {
    const response = await fetch(`${this.options.apiUrl ?? DEFAULT_API_URL}/track/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publishable_key: this.options.publishableKey, lkclid: getClickId() ?? undefined, ...payload }),
      keepalive: true,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error((data as { error?: string }).error ?? `Linkkit tracking failed (${response.status})`);
    return data;
  }
}

export function Analytics(props: AnalyticsOptions): null {
  const analytics = useMemo(() => new LinkkitAnalytics(props), [
    props.publishableKey,
    props.apiUrl,
    props.cookieDomain,
    props.cookieDays,
    JSON.stringify(props.domainsConfig ?? {}),
  ]);

  useEffect(() => {
    analytics.startOutboundTracking();
    return () => analytics.stopOutboundTracking();
  }, [analytics]);

  return null;
}
