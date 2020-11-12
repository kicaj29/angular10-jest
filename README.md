# steps to integrate jest with angular 10 project

## install dependencies

```
npm install jest jest-preset-angular @types/jest --save-dev
```

## add jest.config.js

## update src/test.ts

## update the content of the tsconfig.spec.json file

In compilerOptions section add:

```
 "types": [
      "jest", // 1
      "node"
    ],
    "esModuleInterop": true, // 2
    "emitDecoratorMetadata": true // 3
```
# resources
https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/   
