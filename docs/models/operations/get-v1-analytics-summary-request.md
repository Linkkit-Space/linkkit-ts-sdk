# GetV1AnalyticsSummaryRequest

## Example Usage

```typescript
import { GetV1AnalyticsSummaryRequest } from "linkkit/models/operations";

let value: GetV1AnalyticsSummaryRequest = {
  from: new Date("2024-01-01T00:00:00Z"),
  to: new Date("2024-12-31T23:59:59Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO 8601 start datetime (inclusive)                                                           | 2024-01-01T00:00:00Z                                                                          |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO 8601 end datetime (inclusive)                                                             | 2024-12-31T23:59:59Z                                                                          |