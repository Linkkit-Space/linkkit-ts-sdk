# PostTrackLeadRequest

## Example Usage

```typescript
import { PostTrackLeadRequest } from "@getlinkkit/linkkit/models/operations";

let value: PostTrackLeadRequest = {
  publishableKey: "pk_live_abc123",
  customerExternalId: "cus_123",
  eventName: "Trial Started",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `publishableKey`                                 | *string*                                         | :heavy_check_mark:                               | Your Linkkit publishable key (starts with `pk_`) | pk_live_abc123                                   |
| `lkclid`                                         | *string*                                         | :heavy_minus_sign:                               | Linkkit click ID for attribution (optional)      |                                                  |
| `customerExternalId`                             | *string*                                         | :heavy_check_mark:                               | Your internal identifier for this customer       | cus_123                                          |
| `eventName`                                      | *string*                                         | :heavy_minus_sign:                               | Custom event name (defaults to "Lead")           | Trial Started                                    |
| `customerName`                                   | *string*                                         | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `customerEmail`                                  | *string*                                         | :heavy_minus_sign:                               | N/A                                              |                                                  |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | N/A                                              |                                                  |