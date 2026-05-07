<!-- Start SDK Example Usage [usage] -->
```typescript
import { Linkkit } from "linkkit";

const linkkit = new Linkkit();

async function run() {
  const result = await linkkit.links.healthCheck();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->