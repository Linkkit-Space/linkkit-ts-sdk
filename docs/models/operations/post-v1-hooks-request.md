# PostV1HooksRequest

## Example Usage

```typescript
import { PostV1HooksRequest } from "@getlinkkit/linkkit/models/operations";

let value: PostV1HooksRequest = {
  event: "link.clicked",
  targetUrl: "https://hooks.zapier.com/hooks/catch/123/abc",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `event`                                              | [models.WebhookEvent](../../models/webhook-event.md) | :heavy_check_mark:                                   | N/A                                                  | link.clicked                                         |
| `targetUrl`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | https://hooks.zapier.com/hooks/catch/123/abc         |