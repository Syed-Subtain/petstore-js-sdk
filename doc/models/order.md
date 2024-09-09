
# Order

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `petId` | `bigint \| undefined` | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `shipDate` | `string \| undefined` | Optional | - |
| `orderStatus` | [`OrderStatusEnum \| undefined`](../../doc/models/order-status-enum.md) | Optional | - |
| `complete` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 10,
  "petId": 198772,
  "quantity": 7,
  "shipDate": "2016-03-13T12:52:32.123Z",
  "orderStatus": "placed"
}
```

