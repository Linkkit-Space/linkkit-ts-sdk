# GetV1LinksResponseBody

Paginated list of links

## Example Usage

```typescript
import { GetV1LinksResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1LinksResponseBody = {
  data: [
    {
      shortCode: "abc123",
      originalUrl: "https://example.com/very-long-path",
      customDomain: "go.acme.com",
    },
  ],
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `data`                                | [models.Link](../../models/link.md)[] | :heavy_minus_sign:                    | N/A                                   |
| `meta`                                | [models.Meta](../../models/meta.md)   | :heavy_minus_sign:                    | N/A                                   |