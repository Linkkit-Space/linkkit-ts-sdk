# PostV1LinksRequest

## Example Usage

```typescript
import { PostV1LinksRequest } from "@getlinkkit/linkkit/models/operations";

let value: PostV1LinksRequest = {
  originalUrl: "https://example.com/very-long-path",
  customDomain: "go.acme.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `originalUrl`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | https://example.com/very-long-path                                                            |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `customDomain`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | go.acme.com                                                                                   |
| `expireAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `listId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |