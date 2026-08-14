# QrCodes

## Overview

### Available Operations

* [list](#list) - List QR codes
* [create](#create) - Create a QR code
* [get](#get) - Get a QR code
* [update](#update) - Update a QR code
* [delete](#delete) - Delete a QR code

## list

List QR codes

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/qr-codes" method="get" path="/v1/qr-codes" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.qrCodes.list({});

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
import { qrCodesList } from "@getlinkkit/linkkit/funcs/qr-codes-list.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await qrCodesList(linkkit, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("qrCodesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1QrCodesRequest](../../models/operations/get-v1-qr-codes-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1QrCodesResponse](../../models/operations/get-v1-qr-codes-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 401                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## create

Create a QR code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/qr-codes" method="post" path="/v1/qr-codes" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.qrCodes.create({
    url: "https://uselinkkit.com/abc123",
    color: "#1D4ED8",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { qrCodesCreate } from "@getlinkkit/linkkit/funcs/qr-codes-create.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await qrCodesCreate(linkkit, {
    url: "https://uselinkkit.com/abc123",
    color: "#1D4ED8",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qrCodesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1QrCodesRequest](../../models/operations/post-v1-qr-codes-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QrCode](../../models/qr-code.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Get a QR code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/qr-codes/{id}" method="get" path="/v1/qr-codes/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.qrCodes.get({
    id: "1236a57f-6722-4cb4-9893-60bfb8726c71",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { qrCodesGet } from "@getlinkkit/linkkit/funcs/qr-codes-get.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await qrCodesGet(linkkit, {
    id: "1236a57f-6722-4cb4-9893-60bfb8726c71",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qrCodesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1QrCodesIdRequest](../../models/operations/get-v1-qr-codes-id-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QrCode](../../models/qr-code.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## update

Update a QR code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/qr-codes/{id}" method="patch" path="/v1/qr-codes/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.qrCodes.update({
    id: "0ee2d81e-a1ce-49a7-b6d4-45874db14f68",
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
import { qrCodesUpdate } from "@getlinkkit/linkkit/funcs/qr-codes-update.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await qrCodesUpdate(linkkit, {
    id: "0ee2d81e-a1ce-49a7-b6d4-45874db14f68",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qrCodesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV1QrCodesIdRequest](../../models/operations/patch-v1-qr-codes-id-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.QrCode](../../models/qr-code.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a QR code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v1/qr-codes/{id}" method="delete" path="/v1/qr-codes/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.qrCodes.delete({
    id: "15636eb7-873c-4116-b4f4-8a86ad5ed6df",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { qrCodesDelete } from "@getlinkkit/linkkit/funcs/qr-codes-delete.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await qrCodesDelete(linkkit, {
    id: "15636eb7-873c-4116-b4f4-8a86ad5ed6df",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qrCodesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1QrCodesIdRequest](../../models/operations/delete-v1-qr-codes-id-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1QrCodesIdResponse](../../models/operations/delete-v1-qr-codes-id-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |