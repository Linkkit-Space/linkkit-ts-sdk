# DomainDetail

## Example Usage

```typescript
import { DomainDetail } from "@getlinkkit/linkkit/models";

let value: DomainDetail = {
  domain: "go.acme.com",
  cnameName: "go",
  cnameValue: "cname.uselinkkit.com",
  txtName: "_linkkit.go",
  txtValue: "linkkit-verify=abc123",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `domain`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | go.acme.com                                                                                   |
| `isVerified`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `cnameName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | go                                                                                            |
| `cnameValue`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | cname.uselinkkit.com                                                                          |
| `txtName`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | _linkkit.go                                                                                   |
| `txtValue`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | linkkit-verify=abc123                                                                         |