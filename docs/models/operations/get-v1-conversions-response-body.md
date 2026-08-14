# GetV1ConversionsResponseBody

Paginated list of conversions

## Example Usage

```typescript
import { GetV1ConversionsResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1ConversionsResponseBody = {
  data: [
    {
      type: "lead",
      eventName: "Lead",
      customerExternalId: "cus_123",
      amount: 4999,
      currency: "usd",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `data`                                            | [models.Conversion](../../models/conversion.md)[] | :heavy_minus_sign:                                | N/A                                               |
| `meta`                                            | [models.Meta](../../models/meta.md)               | :heavy_minus_sign:                                | N/A                                               |