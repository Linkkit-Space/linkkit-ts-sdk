# Webhook

## Example Usage

```typescript
import { Webhook } from "linkkit/models";

let value: Webhook = {
  event: "link.clicked",
  url: "https://hooks.zapier.com/hooks/catch/123/abc",
  secret: "a3f8c2...",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `event`                                                                                            | [models.WebhookEvent](../models/webhook-event.md)                                                  | :heavy_minus_sign:                                                                                 | N/A                                                                                                | link.clicked                                                                                       |
| `url`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | https://hooks.zapier.com/hooks/catch/123/abc                                                       |
| `secret`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | HMAC-SHA256 secret used to verify payloads. Store this securely — it is only returned on creation. | a3f8c2...                                                                                          |
| `isActive`                                                                                         | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |