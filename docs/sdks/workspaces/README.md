# Workspaces

## Overview

List workspaces the authenticated API key has access to.

### Available Operations

* [list](#list) - List workspaces

## list

Returns all workspaces the API key belongs to, including the caller's role in each.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/v1/workspaces" method="get" path="/v1/workspaces" -->
```typescript
import { Linkkit } from "@getlinkkit/linkkit";

const linkkit = new Linkkit({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await linkkit.workspaces.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinkkitCore } from "@getlinkkit/linkkit/core.js";
import { workspacesList } from "@getlinkkit/linkkit/funcs/workspaces-list.js";

// Use `LinkkitCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linkkit = new LinkkitCore({
  security: {
    bearerAuth: process.env["LINKKIT_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await workspacesList(linkkit);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("workspacesList failed:", res.error);
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

**Promise\<[operations.GetV1WorkspacesResponse](../../models/operations/get-v1-workspaces-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorT              | 401                        | application/json           |
| errors.LinkkitDefaultError | 4XX, 5XX                   | \*/\*                      |