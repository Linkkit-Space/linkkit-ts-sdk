# GetV1WorkspacesResponse

List of workspaces

## Example Usage

```typescript
import { GetV1WorkspacesResponse } from "@getlinkkit/linkkit/models/operations";

let value: GetV1WorkspacesResponse = {
  data: [
    {
      name: "Acme Inc",
      slug: "acme-inc",
      color: "#3B82F6",
      plan: "pro",
      role: "owner",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `data`                                          | [models.Workspace](../../models/workspace.md)[] | :heavy_minus_sign:                              | N/A                                             |
| `meta`                                          | [models.MetaTotal](../../models/meta-total.md)  | :heavy_minus_sign:                              | N/A                                             |