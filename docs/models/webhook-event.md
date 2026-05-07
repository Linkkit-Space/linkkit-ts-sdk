# WebhookEvent

## Example Usage

```typescript
import { WebhookEvent } from "linkkit/models";

let value: WebhookEvent = "link.clicked";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"link.created" | "link.updated" | "link.deleted" | "link.clicked" | Unrecognized<string>
```