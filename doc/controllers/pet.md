# Pet

Everything about your Pets

Find out more: [http://swagger.io](http://swagger.io)

```ts
const petController = new PetController(client);
```

## Class Name

`PetController`

## Methods

* [Update Pet](../../doc/controllers/pet.md#update-pet)
* [Add Pet](../../doc/controllers/pet.md#add-pet)
* [Find Pets by Status](../../doc/controllers/pet.md#find-pets-by-status)
* [Find Pets by Tags](../../doc/controllers/pet.md#find-pets-by-tags)
* [Get Pet by Id](../../doc/controllers/pet.md#get-pet-by-id)
* [Update Pet With Form](../../doc/controllers/pet.md#update-pet-with-form)
* [Delete Pet](../../doc/controllers/pet.md#delete-pet)
* [Upload File](../../doc/controllers/pet.md#upload-file)


# Update Pet

Update an existing pet by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async updatePet(  contentType: ContentTypeEnum,
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  petStatus?: PetStatusEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `petStatus` | [`PetStatusEnum \| undefined`](../../doc/models/pet-status-enum.md) | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet`](../../doc/models/pet.md)

## Example Usage

```ts
const contentType = ContentTypeEnum.EnumApplicationxwwwformurlencoded;

const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const category: Category = {
  id: BigInt(1),
  name: 'Dogs',
};

const tags: Tag[] = [
  {}
];

try {
  const { result, ...httpResponse } = await petController.updatePet(
  contentType,
  name,
  photoUrls,
  id,
  category,
  tags
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |
| 405 | Validation exception | `ApiError` |


# Add Pet

Add a new pet to the store

:information_source: **Note** This endpoint does not require authentication.

```ts
async addPet(  contentType: ContentTypeEnum,
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  petStatus?: PetStatusEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `petStatus` | [`PetStatusEnum \| undefined`](../../doc/models/pet-status-enum.md) | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet`](../../doc/models/pet.md)

## Example Usage

```ts
const contentType = ContentTypeEnum.EnumApplicationxwwwformurlencoded;

const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const category: Category = {
  id: BigInt(1),
  name: 'Dogs',
};

const tags: Tag[] = [
  {}
];

try {
  const { result, ...httpResponse } = await petController.addPet(
  contentType,
  name,
  photoUrls,
  id,
  category,
  tags
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 405 | Invalid input | `ApiError` |


# Find Pets by Status

Multiple status values can be provided with comma separated strings

:information_source: **Note** This endpoint does not require authentication.

```ts
async findPetsByStatus(  status?: Status1Enum,
requestOptions?: RequestOptions): Promise<ApiResponse<Pet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status1Enum \| undefined`](../../doc/models/status-1-enum.md) | Query, Optional | Status values that need to be considered for filter |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet[]`](../../doc/models/pet.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await petController.findPetsByStatus();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid status value | `ApiError` |


# Find Pets by Tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

:information_source: **Note** This endpoint does not require authentication.

```ts
async findPetsByTags(  tags?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<Pet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | `string[] \| undefined` | Query, Optional | Tags to filter by |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet[]`](../../doc/models/pet.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await petController.findPetsByTags();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid tag value | `ApiError` |


# Get Pet by Id

Returns a single pet

```ts
async getPetById(  petId: bigint,
requestOptions?: RequestOptions): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet`](../../doc/models/pet.md)

## Example Usage

```ts
const petId = BigInt(152);

try {
  const { result, ...httpResponse } = await petController.getPetById(petId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |


# Update Pet With Form

Updates a pet in the store with form data

:information_source: **Note** This endpoint does not require authentication.

```ts
async updatePetWithForm(  petId: bigint,
  name?: string,
  status?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet that needs to be updated |
| `name` | `string \| undefined` | Query, Optional | Name of pet that needs to be updated |
| `status` | `string \| undefined` | Query, Optional | Status of pet that needs to be updated |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const petId = BigInt(152);

try {
  const { result, ...httpResponse } = await petController.updatePetWithForm(petId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 405 | Invalid input | `ApiError` |


# Delete Pet

delete a pet

:information_source: **Note** This endpoint does not require authentication.

```ts
async deletePet(  petId: bigint,
  apiKey?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | Pet id to delete |
| `apiKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const petId = BigInt(152);

try {
  const { result, ...httpResponse } = await petController.deletePet(petId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid pet value | `ApiError` |


# Upload File

uploads an image

:information_source: **Note** This endpoint does not require authentication.

```ts
async uploadFile(  petId: bigint,
  contentType: ContentType2Enum,
  additionalMetadata?: string,
  body?: FileWrapper,
requestOptions?: RequestOptions): Promise<ApiResponse<PetImage>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to update |
| `contentType` | [`ContentType2Enum`](../../doc/models/content-type-2-enum.md) | Header, Required | - |
| `additionalMetadata` | `string \| undefined` | Query, Optional | Additional Metadata |
| `body` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PetImage`](../../doc/models/pet-image.md)

## Example Usage

```ts
const petId = BigInt(152);

const contentType = ContentType2Enum.EnumApplicationoctetstream;

try {
  const { result, ...httpResponse } = await petController.uploadFile(
  petId,
  contentType
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

