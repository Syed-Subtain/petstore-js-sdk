
# Pet

## Structure

`Pet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `photoUrls` | `string[]` | Required | - |
| `id` | `bigint \| undefined` | Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Optional | - |
| `petStatus` | [`PetStatusEnum \| undefined`](../../doc/models/pet-status-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "doggie",
  "photoUrls": [
    "photoUrls5",
    "photoUrls6"
  ],
  "id": 10,
  "category": {
    "id": 232,
    "name": "name2"
  },
  "tags": [
    {
      "id": 26,
      "name": "name0"
    }
  ],
  "petStatus": "sold"
}
```

