# GetV1AnalyticsLinksShortCodeResponse

## Example Usage

```typescript
import { GetV1AnalyticsLinksShortCodeResponse } from "@getlinkkit/linkkit/models/operations";

let value: GetV1AnalyticsLinksShortCodeResponse = {
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                                          | [operations.GetV1AnalyticsLinksShortCodeResponseBody](../../models/operations/get-v1-analytics-links-short-code-response-body.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |