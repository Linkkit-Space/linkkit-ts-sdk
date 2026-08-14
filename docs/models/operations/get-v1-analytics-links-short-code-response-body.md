# GetV1AnalyticsLinksShortCodeResponseBody

Paginated click events

## Example Usage

```typescript
import { GetV1AnalyticsLinksShortCodeResponseBody } from "@getlinkkit/linkkit/models/operations";

let value: GetV1AnalyticsLinksShortCodeResponseBody = {
  data: [
    {
      country: "US",
      city: "New York",
      device: "mobile",
      browser: "Chrome",
      os: "iOS",
      referer: "https://twitter.com",
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `data`                                  | [models.Click](../../models/click.md)[] | :heavy_minus_sign:                      | N/A                                     |
| `meta`                                  | [models.Meta](../../models/meta.md)     | :heavy_minus_sign:                      | N/A                                     |