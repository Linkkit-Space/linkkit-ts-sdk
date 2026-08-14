# Workspace

## Example Usage

```typescript
import { Workspace } from "@getlinkkit/linkkit/models";

let value: Workspace = {
  name: "Acme Inc",
  slug: "acme-inc",
  color: "#3B82F6",
  plan: "pro",
  role: "owner",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | Acme Inc                                                                                      |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | acme-inc                                                                                      |
| `color`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | #3B82F6                                                                                       |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `plan`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | pro                                                                                           |
| `role`                                                                                        | [models.Role](../models/role.md)                                                              | :heavy_minus_sign:                                                                            | N/A                                                                                           | owner                                                                                         |
| `joinedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |