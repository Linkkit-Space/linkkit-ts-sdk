# GetV1UtmTemplatesResponseBody

All UTM templates ordered by name

## Example Usage

```typescript
import { GetV1UtmTemplatesResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1UtmTemplatesResponseBody = {
  data: [
    {
      name: "Summer Campaign",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `data`                                               | [models.UtmTemplate](../../models/utm-template.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `meta`                                               | [models.MetaTotal](../../models/meta-total.md)       | :heavy_minus_sign:                                   | N/A                                                  |