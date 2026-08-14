# Lists

## Overview

Group links into named lists.

### Available Operations

* [getAll](#getall) - List all lists
* [create](#create) - Create a list
* [get](#get) - Get a list
* [update](#update) - Update a list
* [delete](#delete) - Delete a list

## getAll

List all lists

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/lists" method="get" path="/v1/lists" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.lists.getAll();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { listsGetAll } from "@getlinkkit/linkkit/funcs/lists-get-all.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await listsGetAll(linkkit);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsGetAll failed:", res.error);
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

**Promise\<[operations.GetV1ListsResponse](../../models/operations/get-v1-lists-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 401                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## create

Create a list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/lists" method="post" path="/v1/lists" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.lists.create({
    name: "Product Hunt Links",
    color: "#3B82F6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { listsCreate } from "@getlinkkit/linkkit/funcs/lists-create.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await listsCreate(linkkit, {
    name: "Product Hunt Links",
    color: "#3B82F6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListInput](../../models/list-input.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.List](../../models/list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Get a list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/lists/{id}" method="get" path="/v1/lists/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.lists.get({
    id: "277eea26-6ba8-4307-916a-b0a7e212636c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { listsGet } from "@getlinkkit/linkkit/funcs/lists-get.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await listsGet(linkkit, {
    id: "277eea26-6ba8-4307-916a-b0a7e212636c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1ListsIdRequest](../../models/operations/get-v1-lists-id-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.List](../../models/list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## update

Update a list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/lists/{id}" method="patch" path="/v1/lists/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.lists.update({
    id: "04a54561-3274-40db-bedb-ffa5b9490c63",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { listsUpdate } from "@getlinkkit/linkkit/funcs/lists-update.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await listsUpdate(linkkit, {
    id: "04a54561-3274-40db-bedb-ffa5b9490c63",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV1ListsIdRequest](../../models/operations/patch-v1-lists-id-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.List](../../models/list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a list

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v1/lists/{id}" method="delete" path="/v1/lists/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.lists.delete({
    id: "078b1e8c-6ce7-428f-923a-984641df3b2b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { listsDelete } from "@getlinkkit/linkkit/funcs/lists-delete.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await listsDelete(linkkit, {
    id: "078b1e8c-6ce7-428f-923a-984641df3b2b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("listsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1ListsIdRequest](../../models/operations/delete-v1-lists-id-request.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1ListsIdResponse](../../models/operations/delete-v1-lists-id-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |