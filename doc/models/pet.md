
# Pet

## Structure

`Pet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | - |
| `name` | `string` | Required | - |
| `photoUrls` | `string[]` | Required | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Optional | - |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | pet status in the store |

## Example (as JSON)

```json
{
  "id": 120,
  "category": {
    "id": 232,
    "name": "name2"
  },
  "name": "name0",
  "photoUrls": [
    "photoUrls5",
    "photoUrls6"
  ],
  "tags": [
    {
      "id": 26,
      "photoUrls": [
        "photoUrls5"
      ],
      "name": "name0"
    }
  ],
  "status": "available"
}
```

