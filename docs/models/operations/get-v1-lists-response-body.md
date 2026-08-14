# GetV1ListsResponseBody

All lists ordered by name

## Example Usage

```typescript
import { GetV1ListsResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1ListsResponseBody = {
  data: [
    {
      name: "Product Hunt Links",
      color: "#3B82F6",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `data`                                         | [models.List](../../models/list.md)[]          | :heavy_minus_sign:                             | N/A                                            |
| `meta`                                         | [models.MetaTotal](../../models/meta-total.md) | :heavy_minus_sign:                             | N/A                                            |