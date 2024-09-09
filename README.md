
# Getting Started with Swagger Petstore - OpenAPI 3.0

## Introduction

This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:

- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

Find out more about Swagger: [http://swagger.io](http://swagger.io)

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install petstore-package-sdk@1.2.3
```

For additional package details, see the [Npm page for the petstore-package-sdk@1.2.3 npm](https://www.npmjs.com/package/petstore-package-sdk/v/1.2.3).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `defaultHost` | `string` | *Default*: `'www.example.com'` |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `customHeaderAuthenticationCredentials` | [`CustomHeaderAuthenticationCredentials`](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/auth/custom-header-signature.md) | The credential object for customHeaderAuthentication |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  customHeaderAuthenticationCredentials: {
    'api_key': 'api_key'
  },
  timeout: 0,
  environment: Environment.Production,
  defaultHost: 'www.example.com',
});
```

## Authorization

This API uses the following authentication schemes.

* [`api_key (Custom Header Signature)`](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/auth/custom-header-signature.md)

## List of APIs

* [Pet](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/controllers/pet.md)
* [Store](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/controllers/store.md)
* [User](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/controllers/user.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/api-response.md)
* [ApiError](https://www.github.com/Syed-Subtain/petstore-js-sdk/tree/1.2.3/doc/api-error.md)

