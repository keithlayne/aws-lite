import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "@aws-sdk/client-apigatewaymanagementapi";

declare interface AwsLiteApiGatewayManagementApi {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START

  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    ApiGatewayManagementApi: AwsLiteApiGatewayManagementApi;
  }
}
