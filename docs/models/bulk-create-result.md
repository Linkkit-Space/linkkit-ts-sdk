# BulkCreateResult

## Example Usage

```typescript
import { BulkCreateResult } from "@getlinkkit/linkkit/models";

let value: BulkCreateResult = {
  created: 95,
  skipped: 5,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `created`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 95                                                                      |
| `skipped`                                                               | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     | 5                                                                       |
| `errors`                                                                | [models.BulkCreateResultError](../models/bulk-create-result-error.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |                                                                         |