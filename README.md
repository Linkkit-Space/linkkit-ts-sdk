# linkkit

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *linkkit* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=linkkit&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)

<!-- Start Summary [summary] -->
## Summary

Linkkit API: The Linkkit API lets you create and manage short links, QR codes, tags, lists,
UTM templates, and analytics — all programmatically.

## Authentication
All `/v1/*` endpoints require authentication. Pass your API key in either header:

```
Authorization: Bearer <your-api-key>
X-Api-Key: <your-api-key>
```

Supabase JWTs are also accepted for dashboard clients. If you're accessing the API
via RapidAPI, authentication is handled automatically by the RapidAPI proxy.

## Pagination
List endpoints support `?page=` (1-based, default 1) and `?limit=` (default 20, max 100).
Responses include a `meta` object with `page`, `limit`, and `total`.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [linkkit](#linkkit)
  * [Authentication](#authentication)
  * [Pagination](#pagination)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination-1)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @getlinkkit/linkkit
```

### PNPM

```bash
pnpm add @getlinkkit/linkkit
```

### Bun

```bash
bun add @getlinkkit/linkkit
```

### Yarn

```bash
yarn add @getlinkkit/linkkit
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@getlinkkit/linkkit")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type   | Scheme      | Environment Variable   |
| ------------ | ------ | ----------- | ---------------------- |
| `bearerAuth` | http   | HTTP Bearer | `LINKKIT_BEARER_AUTH`  |
| `apiKeyAuth` | apiKey | API key     | `LINKKIT_API_KEY_AUTH` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Analytics](docs/sdks/analytics/README.md)

* [getSummary](docs/sdks/analytics/README.md#getsummary) - Summary statistics
* [getLinkEvents](docs/sdks/analytics/README.md#getlinkevents) - Click events for a link

### [Authentication](docs/sdks/authentication/README.md)

* [test](docs/sdks/authentication/README.md#test) - Validate API key

### [Conversions](docs/sdks/conversions/README.md)

* [list](docs/sdks/conversions/README.md#list) - List conversions

### [Domains](docs/sdks/domains/README.md)

* [list](docs/sdks/domains/README.md#list) - List domains
* [get](docs/sdks/domains/README.md#get) - Get a domain

### [Exports](docs/sdks/exports/README.md)

* [exportLinksAsCsv](docs/sdks/exports/README.md#exportlinksascsv) - Export links as CSV
* [getClicksCsv](docs/sdks/exports/README.md#getclickscsv) - Export clicks as CSV

### [Links](docs/sdks/links/README.md)

* [healthCheck](docs/sdks/links/README.md#healthcheck) - Health check
* [list](docs/sdks/links/README.md#list) - List links
* [create](docs/sdks/links/README.md#create) - Create a link
* [upsert](docs/sdks/links/README.md#upsert) - Upsert a link
* [get](docs/sdks/links/README.md#get) - Get a link
* [update](docs/sdks/links/README.md#update) - Update a link
* [delete](docs/sdks/links/README.md#delete) - Delete a link
* [bulkCreate](docs/sdks/links/README.md#bulkcreate) - Bulk create links

### [Lists](docs/sdks/lists/README.md)

* [getAll](docs/sdks/lists/README.md#getall) - List all lists
* [create](docs/sdks/lists/README.md#create) - Create a list
* [get](docs/sdks/lists/README.md#get) - Get a list
* [update](docs/sdks/lists/README.md#update) - Update a list
* [delete](docs/sdks/lists/README.md#delete) - Delete a list

### [QrCodes](docs/sdks/qrcodes/README.md)

* [list](docs/sdks/qrcodes/README.md#list) - List QR codes
* [create](docs/sdks/qrcodes/README.md#create) - Create a QR code
* [get](docs/sdks/qrcodes/README.md#get) - Get a QR code
* [update](docs/sdks/qrcodes/README.md#update) - Update a QR code
* [delete](docs/sdks/qrcodes/README.md#delete) - Delete a QR code

### [Tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List tags
* [create](docs/sdks/tags/README.md#create) - Create a tag
* [get](docs/sdks/tags/README.md#get) - Get a tag
* [update](docs/sdks/tags/README.md#update) - Update a tag
* [delete](docs/sdks/tags/README.md#delete) - Delete a tag

### [Tracking](docs/sdks/tracking/README.md)

* [lead](docs/sdks/tracking/README.md#lead) - Track a lead
* [trackSale](docs/sdks/tracking/README.md#tracksale) - Track a sale

### [UtmTemplates](docs/sdks/utmtemplates/README.md)

* [list](docs/sdks/utmtemplates/README.md#list) - List UTM templates
* [create](docs/sdks/utmtemplates/README.md#create) - Create a UTM template
* [get](docs/sdks/utmtemplates/README.md#get) - Get a UTM template
* [update](docs/sdks/utmtemplates/README.md#update) - Update a UTM template
* [delete](docs/sdks/utmtemplates/README.md#delete) - Delete a UTM template

### [Webhooks](docs/sdks/webhooks/README.md)

* [subscribe](docs/sdks/webhooks/README.md#subscribe) - Subscribe to an event
* [unsubscribe](docs/sdks/webhooks/README.md#unsubscribe) - Unsubscribe

### [Workspaces](docs/sdks/workspaces/README.md)

* [list](docs/sdks/workspaces/README.md#list) - List workspaces

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`analyticsGetLinkEvents`](docs/sdks/analytics/README.md#getlinkevents) - Click events for a link
- [`analyticsGetSummary`](docs/sdks/analytics/README.md#getsummary) - Summary statistics
- [`authenticationTest`](docs/sdks/authentication/README.md#test) - Validate API key
- [`conversionsList`](docs/sdks/conversions/README.md#list) - List conversions
- [`domainsGet`](docs/sdks/domains/README.md#get) - Get a domain
- [`domainsList`](docs/sdks/domains/README.md#list) - List domains
- [`exportsExportLinksAsCsv`](docs/sdks/exports/README.md#exportlinksascsv) - Export links as CSV
- [`exportsGetClicksCsv`](docs/sdks/exports/README.md#getclickscsv) - Export clicks as CSV
- [`linksBulkCreate`](docs/sdks/links/README.md#bulkcreate) - Bulk create links
- [`linksCreate`](docs/sdks/links/README.md#create) - Create a link
- [`linksDelete`](docs/sdks/links/README.md#delete) - Delete a link
- [`linksGet`](docs/sdks/links/README.md#get) - Get a link
- [`linksHealthCheck`](docs/sdks/links/README.md#healthcheck) - Health check
- [`linksList`](docs/sdks/links/README.md#list) - List links
- [`linksUpdate`](docs/sdks/links/README.md#update) - Update a link
- [`linksUpsert`](docs/sdks/links/README.md#upsert) - Upsert a link
- [`listsCreate`](docs/sdks/lists/README.md#create) - Create a list
- [`listsDelete`](docs/sdks/lists/README.md#delete) - Delete a list
- [`listsGet`](docs/sdks/lists/README.md#get) - Get a list
- [`listsGetAll`](docs/sdks/lists/README.md#getall) - List all lists
- [`listsUpdate`](docs/sdks/lists/README.md#update) - Update a list
- [`qrCodesCreate`](docs/sdks/qrcodes/README.md#create) - Create a QR code
- [`qrCodesDelete`](docs/sdks/qrcodes/README.md#delete) - Delete a QR code
- [`qrCodesGet`](docs/sdks/qrcodes/README.md#get) - Get a QR code
- [`qrCodesList`](docs/sdks/qrcodes/README.md#list) - List QR codes
- [`qrCodesUpdate`](docs/sdks/qrcodes/README.md#update) - Update a QR code
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create a tag
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete a tag
- [`tagsGet`](docs/sdks/tags/README.md#get) - Get a tag
- [`tagsList`](docs/sdks/tags/README.md#list) - List tags
- [`tagsUpdate`](docs/sdks/tags/README.md#update) - Update a tag
- [`trackingLead`](docs/sdks/tracking/README.md#lead) - Track a lead
- [`trackingTrackSale`](docs/sdks/tracking/README.md#tracksale) - Track a sale
- [`utmTemplatesCreate`](docs/sdks/utmtemplates/README.md#create) - Create a UTM template
- [`utmTemplatesDelete`](docs/sdks/utmtemplates/README.md#delete) - Delete a UTM template
- [`utmTemplatesGet`](docs/sdks/utmtemplates/README.md#get) - Get a UTM template
- [`utmTemplatesList`](docs/sdks/utmtemplates/README.md#list) - List UTM templates
- [`utmTemplatesUpdate`](docs/sdks/utmtemplates/README.md#update) - Update a UTM template
- [`webhooksSubscribe`](docs/sdks/webhooks/README.md#subscribe) - Subscribe to an event
- [`webhooksUnsubscribe`](docs/sdks/webhooks/README.md#unsubscribe) - Unsubscribe
- [`workspacesList`](docs/sdks/workspaces/README.md#list) - List workspaces

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.links.healthCheck({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LinkkitError`](./src/models/errors/linkkit-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Linkkit } from "@getlinkkit/linkkit";
import * as errors from "@getlinkkit/linkkit/models/errors";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  try {
    const result = await linkkit.links.list({});

    for await (const page of result) {
      console.log(page);
    }
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.LinkkitError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.error); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`LinkkitError`](./src/models/errors/linkkit-error.ts): The base class for HTTP error responses.
  * [`ErrorT`](./src/models/errors/error-t.ts): *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`LinkkitError`](./src/models/errors/linkkit-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  serverURL: "https://api.uselinkkit.com",
});

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Linkkit } from "@getlinkkit/linkkit";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@getlinkkit/linkkit/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Linkkit({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const sdk = new Linkkit({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LINKKIT_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=linkkit&utm_campaign=typescript)
