# PostV1UtmTemplatesRequest

## Example Usage

```typescript
import { PostV1UtmTemplatesRequest } from "linkkit/models/operations";

let value: PostV1UtmTemplatesRequest = {
  name: "Summer Campaign",
  utmSource: "newsletter",
  utmMedium: "email",
  utmCampaign: "summer-sale",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                | Summer Campaign    |
| `utmSource`        | *string*           | :heavy_minus_sign: | N/A                | newsletter         |
| `utmMedium`        | *string*           | :heavy_minus_sign: | N/A                | email              |
| `utmCampaign`      | *string*           | :heavy_minus_sign: | N/A                | summer-sale        |
| `utmTerm`          | *string*           | :heavy_minus_sign: | N/A                |                    |
| `utmContent`       | *string*           | :heavy_minus_sign: | N/A                |                    |
| `ref`              | *string*           | :heavy_minus_sign: | N/A                |                    |