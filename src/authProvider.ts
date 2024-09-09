/**
 * Swagger PetstoreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  customHeaderAuthenticationProvider,
  OAuthConfiguration,
  requestAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';
import { OAuthToken } from './models/oAuthToken';
import { PetstoreAuthManager } from './petstoreAuthManager';

export function createAuthProviderFromConfig(
  config: Partial<Configuration>,
  petstoreAuth: () => PetstoreAuthManager | undefined
) {
  const authConfig = {
    apiKey:
      config.apiKeyCredentials &&
      customHeaderAuthenticationProvider(config.apiKeyCredentials),
    petstoreAuth:
      config.petstoreAuthCredentials &&
      requestAuthenticationProvider(
        config.petstoreAuthCredentials.oAuthToken,
        petstoreAuthTokenProvider(
          petstoreAuth,
          config.petstoreAuthCredentials.oAuthTokenProvider
        ),
        config.petstoreAuthCredentials.oAuthOnTokenUpdate,
        {
          clockSkew: config.petstoreAuthCredentials.oAuthClockSkew,
        } as OAuthConfiguration
      ),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}

function petstoreAuthTokenProvider(
  petstoreAuth: () => PetstoreAuthManager | undefined,
  defaultProvider:
    | ((
        lastOAuthToken: OAuthToken | undefined,
        authManager: PetstoreAuthManager
      ) => Promise<OAuthToken>)
    | undefined
): ((token: OAuthToken | undefined) => Promise<OAuthToken>) | undefined {
  if (defaultProvider === undefined) {
    return undefined;
  }
  return (token: OAuthToken | undefined) => {
    const manager = petstoreAuth();
    if (manager === undefined) {
      throw Error('Unable to find the OAuthManager instance');
    }
    return defaultProvider(token, manager);
  };
}
