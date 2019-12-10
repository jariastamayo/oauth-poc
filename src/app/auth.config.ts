import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  // issuer: 'https://sts.windows.net/36da45f1-dd2c-4d1f-af13-5abe46b99921/',
  issuer: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/v2.0',

  // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin,
  redirectUri: 'https://drpm2.deloittenet.deloitte.com/',
  // redirectUri: 'https://drpm2.deloittenet.deloitte.com/',

  // The SPA's id. The SPA is registered with this id at the auth-server

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  clientId: '0b04219d-8c72-4084-99b0-88d346339bb7',
  scope: 'openid profile email',
  // loginUrl: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/oauth2/authorize',
  // loginUrl: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/oauth2/authorize',
  loginUrl: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/oauth2/v2.0/authorize',
  // responseType: 'id_token',
  clearHashAfterLogin: true,
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  jwks: {
    keys: [
      {
        kty: 'RSA',
        use: 'sig',
        kid: 'BB8CeFVqyaGrGNuehJIiL4dfjzw',
        x5t: 'BB8CeFVqyaGrGNuehJIiL4dfjzw',
        n: 'nYf1jpn7cFdQK2VuZevofmjBjLXldOXe92k5ktSSTg5X0sywHWmGM2n7CCXbx4CCs01-7gFNWUd1H3Ho1OtKIhqmxiPPMTPiY6ZGHUHDm0nGK3RUQafTT9kQ2eJOOB4QViAMdjCOt9lDp0REEWLDU5BvYgbl_cou3H3aVRd4hntm9No-RSlzhB3rBBmZaDM-pYWhxGwkBMbJnNeKJdBStz1xWqbVvCzc_SUUFyo22_4AoNgpPkhFguzIKS55AL1HotQKxlUPttUiR5C4DeJ6EkogQCWT97ePkThVoJGzrjZqNv_P2QHJOXbEvaTQB5kZzz9FzLtJCfQsFwk1kan9Iw',
        e: 'AQAB',
        x5c: [
          'MIIDBTCCAe2gAwIBAgIQbiJkXaenk61AKixVocnLRTANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE5MTAwNTAwMDAwMFoXDTI0MTAwNDAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ2H9Y6Z+3BXUCtlbmXr6H5owYy15XTl3vdpOZLUkk4OV9LMsB1phjNp+wgl28eAgrNNfu4BTVlHdR9x6NTrSiIapsYjzzEz4mOmRh1Bw5tJxit0VEGn00/ZENniTjgeEFYgDHYwjrfZQ6dERBFiw1OQb2IG5f3KLtx92lUXeIZ7ZvTaPkUpc4Qd6wQZmWgzPqWFocRsJATGyZzXiiXQUrc9cVqm1bws3P0lFBcqNtv+AKDYKT5IRYLsyCkueQC9R6LUCsZVD7bVIkeQuA3iehJKIEAlk/e3j5E4VaCRs642ajb/z9kByTl2xL2k0AeZGc8/Rcy7SQn0LBcJNZGp/SMCAwEAAaMhMB8wHQYDVR0OBBYEFOLhl3BDPLNVYDe38Dp9JbUmd4kKMA0GCSqGSIb3DQEBCwUAA4IBAQAN4XwyqYfVdMl0xEbBMa/OzSfIbuI4pQWWpl3isKRAyhXezAX1t/0532LsIcYkwubLifnjHHqo4x1jnVqkvkFjcPZ12kjs/q5d1L0LxlQST/Uqwm/9/AeTzRZXtUKNBWBOWy9gmw9DEH593sNYytGAEerbWhCR3agUxsnQSYTTwg4K9cSqLWzHX5Kcz0NLCGwLx015/Jc7HwPJnp7q5Bo0O0VfhomDiEctIFfzqE5x9T9ZTUSWUDn3J7DYzs2L1pDrOQaNs/YEkXsKDP1j4tOFyxic6OvjQ10Yugjo5jg1uWoxeU8pI0BxY6sj2GZt3Ynzev2bZqmj68y0I9Z+NTZo'
        ],
        issuer: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/v2.0'
      },
      {
        kty: 'RSA',
        use: 'sig',
        kid: 'piVlloQDSMKxh1m2ygqGSVdgFpA',
        x5t: 'piVlloQDSMKxh1m2ygqGSVdgFpA',
        n: '0XhhwpmEpN-jDBapnzhFbtvEU2BpLLcaLzlXm4mlT2MwKZlXRUUam2vI0URDUYRKaa4O62BCWSSGOv2LGQ6tMD5oU-Dqkuf44bo1hLufIqAALUymssfRurTrLd0fqVA9ZCF3fA8_7xQi5r370m4h-G71ez8eE3lxiVPlwSeJXRpa5QzGA8ApwbXGiV-6liGU4eMXBU39A5rFy6TdioaC4P6xns-IdwlLMWdOR28P4O0yhbVTqcN_kW4N4AQonslB_tGOJGhWJjFkcqsQ8cbiJn6Q6FXoNADXohJO3sAtdUHyBNMXc68i25uTYTe_qyCKuC290TkyR3gxMlw7rtuB1Q',
        e: 'AQAB',
        x5c: [
          'MIIDBTCCAe2gAwIBAgIQMCJcgWf4l5xPpeoEwB7DKDANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTE5MTExNTAwMDAwMFoXDTI0MTExNDAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANF4YcKZhKTfowwWqZ84RW7bxFNgaSy3Gi85V5uJpU9jMCmZV0VFGptryNFEQ1GESmmuDutgQlkkhjr9ixkOrTA+aFPg6pLn+OG6NYS7nyKgAC1MprLH0bq06y3dH6lQPWQhd3wPP+8UIua9+9JuIfhu9Xs/HhN5cYlT5cEniV0aWuUMxgPAKcG1xolfupYhlOHjFwVN/QOaxcuk3YqGguD+sZ7PiHcJSzFnTkdvD+DtMoW1U6nDf5FuDeAEKJ7JQf7RjiRoViYxZHKrEPHG4iZ+kOhV6DQA16ISTt7ALXVB8gTTF3OvItubk2E3v6sgirgtvdE5Mkd4MTJcO67bgdUCAwEAAaMhMB8wHQYDVR0OBBYEFEXiTeLGkA2LgAjQOrT2KChpgwCgMA0GCSqGSIb3DQEBCwUAA4IBAQA6GqtYZDQzym0yxfL2NnlSbJP/lLhSQOqbPBdN6DWQ/3duk+e08Ix5qy63hzW+qQR0PAkFEcooL5+bdheS66tFJpVejEcqCSKUVvwOUe6GY/ju752dlB7anBB9An362khehCxqydYNS5Igl0rtcP7dKC3ZBn1m2B9ULsyx46iNpfHQHHv9NKU2vVq2CtNc95CFktwjUwlyWMgbfI/DzPX/cC6KnglqsuVVBO7+jIaBmi0XGqudooZkqgIrvnfNMM13Gy78TUNHsCiAQEwZ/L17yNbzotNGxAoPfuXldbD52MQNOsA7WhH+j8qFWY6gZzTN4NpVtuW4m04TCEFexnTz'
        ],
        issuer: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/v2.0'
      },
      {
        kty: 'RSA',
        use: 'sig',
        kid: 'M6pX7RHoraLsprfJeRCjSxuURhc',
        x5t: 'M6pX7RHoraLsprfJeRCjSxuURhc',
        n: 'xHScZMPo8FifoDcrgncWQ7mGJtiKhrsho0-uFPXg-OdnRKYudTD7-Bq1MDjcqWRf3IfDVjFJixQS61M7wm9wALDj--lLuJJ9jDUAWTA3xWvQLbiBM-gqU0sj4mc2lWm6nPfqlyYeWtQcSC0sYkLlayNgX4noKDaXivhVOp7bwGXq77MRzeL4-9qrRYKjuzHfZL7kNBCsqO185P0NI2Jtmw-EsqYsrCaHsfNRGRrTvUHUq3hWa859kK_5uNd7TeY2ZEwKVD8ezCmSfR59ZzyxTtuPpkCSHS9OtUvS3mqTYit73qcvprjl3R8hpjXLb8oftfpWr3hFRdpxrwuoQEO4QQ',
        e: 'AQAB',
        x5c: [
          'MIIC8TCCAdmgAwIBAgIQfEWlTVc1uINEc9RBi6qHMjANBgkqhkiG9w0BAQsFADAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwHhcNMTgxMDE0MDAwMDAwWhcNMjAxMDE0MDAwMDAwWjAjMSEwHwYDVQQDExhsb2dpbi5taWNyb3NvZnRvbmxpbmUudXMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDEdJxkw+jwWJ+gNyuCdxZDuYYm2IqGuyGjT64U9eD452dEpi51MPv4GrUwONypZF/ch8NWMUmLFBLrUzvCb3AAsOP76Uu4kn2MNQBZMDfFa9AtuIEz6CpTSyPiZzaVabqc9+qXJh5a1BxILSxiQuVrI2BfiegoNpeK+FU6ntvAZervsxHN4vj72qtFgqO7Md9kvuQ0EKyo7Xzk/Q0jYm2bD4SypiysJoex81EZGtO9QdSreFZrzn2Qr/m413tN5jZkTApUPx7MKZJ9Hn1nPLFO24+mQJIdL061S9LeapNiK3vepy+muOXdHyGmNctvyh+1+laveEVF2nGvC6hAQ7hBAgMBAAGjITAfMB0GA1UdDgQWBBQ5TKadw06O0cvXrQbXW0Nb3M3h/DANBgkqhkiG9w0BAQsFAAOCAQEAI48JaFtwOFcYS/3pfS5+7cINrafXAKTL+/+he4q+RMx4TCu/L1dl9zS5W1BeJNO2GUznfI+b5KndrxdlB6qJIDf6TRHh6EqfA18oJP5NOiKhU4pgkF2UMUw4kjxaZ5fQrSoD9omjfHAFNjradnHA7GOAoF4iotvXDWDBWx9K4XNZHWvD11Td66zTg5IaEQDIZ+f8WS6nn/98nAVMDtR9zW7Te5h9kGJGfe6WiHVaGRPpBvqC4iypGHjbRwANwofZvmp5wP08hY1CsnKY5tfP+E2k/iAQgKKa6QoxXToYvP7rsSkglak8N5g/+FJGnq4wP6cOzgZpjdPMwaVt5432GA=='
        ],
        issuer: 'https://login.microsoftonline.com/36da45f1-dd2c-4d1f-af13-5abe46b99921/v2.0'
      }
    ]
  }
  // strictDiscoveryDocumentValidation: false
};
