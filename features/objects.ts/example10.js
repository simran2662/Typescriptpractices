"use strict";
// In a TypeScript application, you can generate an API key using a variety of methods.
//  One common approach is to use a library like uuid to generate a unique key.
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function GenerateApiKey() {
    var apiKey = (0, uuid_1.v4)();
    return apiKey;
}
var api = GenerateApiKey();
console.log("Generate Api key ", api);
