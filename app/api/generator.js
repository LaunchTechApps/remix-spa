"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_path_1 = require("node:path");
var swagger_typescript_api_1 = require("swagger-typescript-api");
(0, swagger_typescript_api_1.generateApi)({
    name: "MySuperbApi.ts",
    output: node_path_1.default.resolve(process.cwd(), "./app/api/__generated__"),
    url: "http://localhost:1323/swagger/docs.json",
    spec: {
        swagger: "2.0",
        info: {
            version: "1.0.0",
            title: "Swagger Petstore",
        },
        paths: {},
    },
    httpClientType: "fetch",
    defaultResponseAsSuccess: false,
    generateClient: true,
    generateRouteTypes: false,
    generateResponses: true,
    toJS: false,
    extractRequestParams: false,
    extractRequestBody: false,
    extractEnums: false,
    unwrapResponseData: false,
    prettier: {
        printWidth: 120,
        tabWidth: 2,
        trailingComma: "all",
        parser: "typescript",
    },
    defaultResponseType: "void",
    singleHttpClient: true,
    cleanOutput: false,
    enumNamesAsValues: false,
    moduleNameFirstTag: false,
    generateUnionEnums: false,
    typePrefix: "",
    typeSuffix: "",
    enumKeyPrefix: "",
    enumKeySuffix: "",
    addReadonly: false,
    sortTypes: false,
    sortRoutes: false,
    extractingOptions: {
        requestBodySuffix: ["Payload", "Body", "Input"],
        requestParamsSuffix: ["Params"],
        responseBodySuffix: ["Data", "Result", "Output"],
        responseErrorSuffix: ["Error", "Fail", "Fails", "ErrorData", "HttpError", "BadResponse"],
    },
    extraTemplates: [],
    fixInvalidTypeNamePrefix: "Type",
    fixInvalidEnumKeyPrefix: "Value",
}).catch(function (e) { return console.error(e); });
(0, swagger_typescript_api_1.generateTemplates)({
    cleanOutput: false,
    output: node_path_1.default.resolve(process.cwd(), "./app/api/__templates__"),
    httpClientType: "fetch",
    modular: false,
    silent: false,
});
