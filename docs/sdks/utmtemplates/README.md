# UtmTemplates

## Overview

### Available Operations

* [list](#list) - List UTM templates
* [create](#create) - Create a UTM template
* [get](#get) - Get a UTM template
* [update](#update) - Update a UTM template
* [delete](#delete) - Delete a UTM template

## list

List UTM templates

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/utm-templates" method="get" path="/v1/utm-templates" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.utmTemplates.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { utmTemplatesList } from "@getlinkkit/linkkit/funcs/utm-templates-list.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await utmTemplatesList(linkkit);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("utmTemplatesList failed:", res.error);
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

**Promise\<[operations.GetV1UtmTemplatesResponse](../../models/operations/get-v1-utm-templates-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 401                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## create

Create a UTM template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_/v1/utm-templates" method="post" path="/v1/utm-templates" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.utmTemplates.create({
    name: "Summer Campaign",
    utmSource: "newsletter",
    utmMedium: "email",
    utmCampaign: "summer-sale",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { utmTemplatesCreate } from "@getlinkkit/linkkit/funcs/utm-templates-create.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await utmTemplatesCreate(linkkit, {
    name: "Summer Campaign",
    utmSource: "newsletter",
    utmMedium: "email",
    utmCampaign: "summer-sale",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("utmTemplatesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV1UtmTemplatesRequest](../../models/operations/post-v1-utm-templates-request.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UtmTemplate](../../models/utm-template.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 400                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Get a UTM template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/utm-templates/{id}" method="get" path="/v1/utm-templates/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.utmTemplates.get({
    id: "631ff541-8a3e-443d-830e-aca6e2570021",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { utmTemplatesGet } from "@getlinkkit/linkkit/funcs/utm-templates-get.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await utmTemplatesGet(linkkit, {
    id: "631ff541-8a3e-443d-830e-aca6e2570021",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("utmTemplatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1UtmTemplatesIdRequest](../../models/operations/get-v1-utm-templates-id-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UtmTemplate](../../models/utm-template.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## update

Update a UTM template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_/v1/utm-templates/{id}" method="patch" path="/v1/utm-templates/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.utmTemplates.update({
    id: "77036811-d448-47a2-953e-88ce20d976b0",
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
import { utmTemplatesUpdate } from "@getlinkkit/linkkit/funcs/utm-templates-update.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await utmTemplatesUpdate(linkkit, {
    id: "77036811-d448-47a2-953e-88ce20d976b0",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("utmTemplatesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchV1UtmTemplatesIdRequest](../../models/operations/patch-v1-utm-templates-id-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UtmTemplate](../../models/utm-template.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a UTM template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/v1/utm-templates/{id}" method="delete" path="/v1/utm-templates/{id}" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.utmTemplates.delete({
    id: "bd419f2a-d21f-47f4-aeba-2acf9023612b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { utmTemplatesDelete } from "@getlinkkit/linkkit/funcs/utm-templates-delete.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await utmTemplatesDelete(linkkit, {
    id: "bd419f2a-d21f-47f4-aeba-2acf9023612b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("utmTemplatesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteV1UtmTemplatesIdRequest](../../models/operations/delete-v1-utm-templates-id-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteV1UtmTemplatesIdResponse](../../models/operations/delete-v1-utm-templates-id-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 404                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |