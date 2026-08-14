# Links

## Overview

Create, retrieve, update, and delete short links.

### Available Operations

* [healthCheck](#healthcheck) - Health check
* [list](#list) - List links
* [create](#create) - Create a link
* [upsert](#upsert) - Upsert a link
* [get](#get) - Get a link
* [update](#update) - Update a link
* [delete](#delete) - Delete a link
* [bulkCreate](#bulkcreate) - Bulk create links

## healthCheck

Returns `ok` if the API is up. No authentication required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/health" method="get" path="/health" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksHealthCheck } from "@getlinkkit/linkkit/funcs/links-health-check.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore();

async function run() {
  const res = await linksHealthCheck(linkkit);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksHealthCheck failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHealthResponse](../../models/operations/get-health-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## list

Returns a paginated list of short links, ordered by creation date descending.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/links" method="get" path="/v1/links" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksList } from "@getlinkkit/linkkit/funcs/links-list.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksList(linkkit, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("linksList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1LinksRequest](../../models/operations/get-v1-links-request.md)                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1LinksResponse](../../models/operations/get-v1-links-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 401                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## create

Creates a new short link. The URL is screened against a local blocklist,
a database blocklist, and Google Safe Browsing before being saved.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/links" method="post" path="/v1/links" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.create({
    originalUrl: "https://example.com/very-long-path",
    customDomain: "go.acme.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksCreate } from "@getlinkkit/linkkit/funcs/links-create.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksCreate(linkkit, {
    originalUrl: "https://example.com/very-long-path",
    customDomain: "go.acme.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1LinksRequest](../../models/operations/post-v1-links-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Link](../../models/link.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400, 403, 422              | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## upsert

Creates a link with the given `shortCode` if it does not exist, or updates it if it does.
Useful for idempotent integrations (e.g. Zapier).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/v1/links/{shortCode}" method="put" path="/v1/links/{shortCode}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.upsert({
    shortCode: "abc123",
    body: {
      originalUrl: "https://example.com/very-long-path",
      customDomain: "go.acme.com",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksUpsert } from "@getlinkkit/linkkit/funcs/links-upsert.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksUpsert(linkkit, {
    shortCode: "abc123",
    body: {
      originalUrl: "https://example.com/very-long-path",
      customDomain: "go.acme.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksUpsert failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutV1LinksShortCodeRequest](../../models/operations/put-v1-links-short-code-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Link](../../models/link.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400, 422                   | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Get a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/links/{shortCode}" method="get" path="/v1/links/{shortCode}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.get({
    shortCode: "abc123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksGet } from "@getlinkkit/linkkit/funcs/links-get.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksGet(linkkit, {
    shortCode: "abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1LinksShortCodeRequest](../../models/operations/get-v1-links-short-code-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Link](../../models/link.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## update

Partial update — only include fields you want to change.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/links/{shortCode}" method="patch" path="/v1/links/{shortCode}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.update({
    shortCode: "<value>",
    body: {
      customDomain: "go.acme.com",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksUpdate } from "@getlinkkit/linkkit/funcs/links-update.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksUpdate(linkkit, {
    shortCode: "<value>",
    body: {
      customDomain: "go.acme.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV1LinksShortCodeRequest](../../models/operations/patch-v1-links-short-code-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Link](../../models/link.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404, 409, 422              | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a link

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v1/links/{shortCode}" method="delete" path="/v1/links/{shortCode}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.delete({
    shortCode: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksDelete } from "@getlinkkit/linkkit/funcs/links-delete.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksDelete(linkkit, {
    shortCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1LinksShortCodeRequest](../../models/operations/delete-v1-links-short-code-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1LinksShortCodeResponse](../../models/operations/delete-v1-links-short-code-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## bulkCreate

Creates up to 1,000 short links in a single request. Each link is screened
against safety checks. Links that fail are skipped and reported in `errors`.
The response is `201` even when some links are skipped.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/links/bulk" method="post" path="/v1/links/bulk" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.links.bulkCreate({
    links: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { linksBulkCreate } from "@getlinkkit/linkkit/funcs/links-bulk-create.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await linksBulkCreate(linkkit, {
    links: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("linksBulkCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1LinksBulkRequest](../../models/operations/post-v1-links-bulk-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BulkCreateResult](../../models/bulk-create-result.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400, 403                   | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |