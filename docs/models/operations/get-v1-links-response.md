# GetV1LinksResponse

## Example Usage

```typescript
import { GetV1LinksResponse } from "linkkit/models/operations";

let value: GetV1LinksResponse = {
  result: {
    data: [
      {
        shortCode: "abc123",
        originalUrl: "https://example.com/very-long-path",
        customDomain: "go.acme.com",
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [operations.GetV1LinksResponseBody](../../models/operations/get-v1-links-response-body.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |