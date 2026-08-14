# PutV1LinksShortCodeRequest

## Example Usage

```typescript
import { PutV1LinksShortCodeRequest } from "@getlinkkit/linkkit/models/operations";

let value: PutV1LinksShortCodeRequest = {
  shortCode: "abc123",
  body: {
    originalUrl: "https://example.com/very-long-path",
    customDomain: "go.acme.com",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `shortCode`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          | abc123                                                                                                       |
| `body`                                                                                                       | [operations.PutV1LinksShortCodeRequestBody](../../models/operations/put-v1-links-short-code-request-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |