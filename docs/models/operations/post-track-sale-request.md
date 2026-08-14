# PostTrackSaleRequest

## Example Usage

```typescript
import { PostTrackSaleRequest } from "@getlinkkit/linkkit/models/operations";

let value: PostTrackSaleRequest = {
  publishableKey: "pk_live_abc123",
  customerExternalId: "cus_123",
  amount: 4999,
  currency: "usd",
  paymentProcessor: "stripe",
  invoiceId: "inv_abc123",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `publishableKey`                                 | *string*                                         | :heavy_check_mark:                               | Your Linkkit publishable key (starts with `pk_`) | pk_live_abc123                                   |
| `lkclid`                                         | *string*                                         | :heavy_minus_sign:                               | Linkkit click ID for attribution (optional)      |                                                  |
| `customerExternalId`                             | *string*                                         | :heavy_check_mark:                               | Your internal identifier for this customer       | cus_123                                          |
| `customerName`                                   | *string*                                         | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `customerEmail`                                  | *string*                                         | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `amount`                                         | *number*                                         | :heavy_check_mark:                               | Sale amount in cents                             | 4999                                             |
| `currency`                                       | *string*                                         | :heavy_minus_sign:                               | ISO 4217 currency code (defaults to "usd")       | usd                                              |
| `paymentProcessor`                               | *string*                                         | :heavy_minus_sign:                               | N/A                                              | stripe                                           |
| `invoiceId`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              | inv_abc123                                       |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | N/A                                              |                                                  |