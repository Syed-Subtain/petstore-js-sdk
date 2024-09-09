
# Customer

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `address` | [`Address[] \| undefined`](../../doc/models/address.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 100000,
  "username": "fehguy",
  "address": [
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0"
    },
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0"
    },
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0"
    }
  ]
}
```

