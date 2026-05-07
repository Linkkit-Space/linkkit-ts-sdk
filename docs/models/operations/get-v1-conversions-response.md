# GetV1ConversionsResponse

## Example Usage

```typescript
import { GetV1ConversionsResponse } from "linkkit/models/operations";

let value: GetV1ConversionsResponse = {
  result: {
    data: [
      {
        type: "lead",
        eventName: "Lead",
        customerExternalId: "cus_123",
        amount: 4999,
        currency: "usd",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [operations.GetV1ConversionsResponseBody](../../models/operations/get-v1-conversions-response-body.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |