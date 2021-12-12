import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '@env/environment';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: environment.Oidc_Issuer,
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: environment.Oidc_ClientId,
  // Login Url of the Identity Provider
  // loginUrl: 'https://demo.identityserver.com/identity/connect/authorize',
  // Login Url of the Identity Provider
  // logoutUrl: 'https://demo.identityserver.com/identity/connect/endsession',
  responseType: environment.Oidc_responseType,
  // URL of the SPA to redirect the user to after login
  redirectUri: environment.Oidc_redirectUri,
  postLogoutRedirectUri: environment.Oidc_postLogoutRedirectUri,
  silentRefreshRedirectUri: environment.Oidc_silentRefreshRedirectUri,
  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. Also provide user sepecific
  scope: environment.Oidc_scope,
  useSilentRefresh: environment.Oidc_useSilentRefresh,
  silentRefreshTimeout: environment.Oidc_silentRefreshTimeout,
  timeoutFactor: environment.Oidc_timeoutFactor,
  sessionChecksEnabled: environment.Oidc_sessionChecksEnabled,
  showDebugInformation: environment.Oidc_showDebugInformation,
  clearHashAfterLogin: environment.Oidc_clearHashAfterLogin,
  nonceStateSeparator: environment.Oidc_nonceStateSeparator,
};
