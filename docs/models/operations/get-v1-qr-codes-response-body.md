# GetV1QrCodesResponseBody

Paginated list of QR codes

## Example Usage

```typescript
import { GetV1QrCodesResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1QrCodesResponseBody = {
  data: [
    {
      color: "#000000",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `data`                                     | [models.QrCode](../../models/qr-code.md)[] | :heavy_minus_sign:                         | N/A                                        |
| `meta`                                     | [models.Meta](../../models/meta.md)        | :heavy_minus_sign:                         | N/A                                        |