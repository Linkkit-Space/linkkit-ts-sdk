# Tracking

## Overview

Public endpoints for recording conversions from your website or app (authenticated via publishable key).

### Available Operations

* [lead](#lead) - Track a lead
* [trackSale](#tracksale) - Track a sale

## lead

Records a lead conversion event. Authenticated via a publishable key (not an API key).
Pass `lkclid` (the Linkkit click ID from the `?lkclid=` query parameter appended to your
short link) to attribute the lead to a specific click.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/track/lead" method="post" path="/track/lead" -->
```typescript
import { Linkkit } from "linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.tracking.lead({
    publishableKey: "pk_live_abc123",
    customerExternalId: "cus_123",
    eventName: "Trial Started",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "linkkit/core.js";
import { trackingLead } from "linkkit/funcs/tracking-lead.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore();

async function run() {
  const res = await trackingLead(linkkit, {
    publishableKey: "pk_live_abc123",
    customerExternalId: "cus_123",
    eventName: "Trial Started",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackingLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostTrackLeadRequest](../../models/operations/post-track-lead-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Conversion](../../models/conversion.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400, 401                   | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## trackSale

Records a sale conversion event. Authenticated via a publishable key (not an API key).
Pass `lkclid` (the Linkkit click ID) to attribute the sale to a specific click.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/track/sale" method="post" path="/track/sale" -->
```typescript
import { Linkkit } from "linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.tracking.trackSale({
    publishableKey: "pk_live_abc123",
    customerExternalId: "cus_123",
    amount: 4999,
    currency: "usd",
    paymentProcessor: "stripe",
    invoiceId: "inv_abc123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "linkkit/core.js";
import { trackingTrackSale } from "linkkit/funcs/tracking-track-sale.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore();

async function run() {
  const res = await trackingTrackSale(linkkit, {
    publishableKey: "pk_live_abc123",
    customerExternalId: "cus_123",
    amount: 4999,
    currency: "usd",
    paymentProcessor: "stripe",
    invoiceId: "inv_abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("trackingTrackSale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostTrackSaleRequest](../../models/operations/post-track-sale-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Conversion](../../models/conversion.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400, 401                   | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |