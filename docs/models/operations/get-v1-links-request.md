# GetV1LinksRequest

## Example Usage

```typescript
import { GetV1LinksRequest } from "@getlinkkit/linkkit/models/operations";

let value: GetV1LinksRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `page`                                                    | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | N/A                                                       |
| `search`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Filter by URL or title (case-insensitive substring match) |
| `listId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Filter by list UUID                                       |
| `isActive`                                                | *boolean*                                                 | :heavy_minus_sign:                                        | Filter by active status                                   |