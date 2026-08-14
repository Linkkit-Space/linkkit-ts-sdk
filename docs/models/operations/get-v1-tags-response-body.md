# GetV1TagsResponseBody

All tags ordered by name

## Example Usage

```typescript
import { GetV1TagsResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1TagsResponseBody = {
  data: [
    {
      name: "marketing",
      color: "#FF5733",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `data`                                         | [models.Tag](../../models/tag.md)[]            | :heavy_minus_sign:                             | N/A                                            |
| `meta`                                         | [models.MetaTotal](../../models/meta-total.md) | :heavy_minus_sign:                             | N/A                                            |