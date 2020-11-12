# steps to integrate jest with angular 10 project

## 1 install dependencies

```
npm install jest jest-preset-angular @types/jest --save-dev
```

## 2 add jest.config.js

## 3 update src/test.ts

## 4 update the content of the tsconfig.spec.json file

In compilerOptions section add:

```
 "types": [
      "jest", // 1
      "node"
    ],
    "esModuleInterop": true, // 2
    "emitDecoratorMetadata": true // 3
```

## 5 remove first line in tsconfig.json

I had to remove first line from tsconfig.json.

```
/* To learn more about this file see: https://angular.io/config/tsconfig. */
```

Although it was only comment it was the reason of the following error:

```
PS D:\GitHub\kicaj29\angular10-jest> npm run test

> angular10-jest@0.0.0 test D:\GitHub\kicaj29\angular10-jest
> jest

SyntaxError: D:\GitHub\kicaj29\angular10-jest\tsconfig.json: Unexpected token / in JSON at position 0
    at parse (<anonymous>)
    at Object.Module._extensions..json (internal/modules/cjs/loader.js:1235:22)
    at Module.load (internal/modules/cjs/loader.js:1050:32)
    at Function.Module._load (internal/modules/cjs/loader.js:938:14)
    at Module.require (internal/modules/cjs/loader.js:1090:19)
    at require (internal/modules/cjs/helpers.js:75:18)
    at Object.<anonymous> (D:\GitHub\kicaj29\angular10-jest\jest.config.js:2:29)
    at Module._compile (internal/modules/cjs/loader.js:1201:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1221:10)
    at Module.load (internal/modules/cjs/loader.js:1050:32)
```

# resources
https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/   
