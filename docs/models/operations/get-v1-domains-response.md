# GetV1DomainsResponse

List of domains

## Example Usage

```typescript
import { GetV1DomainsResponse } from "@getlinkkit/linkkit/models/operations";

let value: GetV1DomainsResponse = {
  data: [
    {
      domain: "go.acme.com",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `data`                                         | [models.Domain](../../models/domain.md)[]      | :heavy_minus_sign:                             | N/A                                            |
| `meta`                                         | [models.MetaTotal](../../models/meta-total.md) | :heavy_minus_sign:                             | N/A                                            |