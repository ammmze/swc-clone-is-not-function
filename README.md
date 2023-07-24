# swc-clone-is-not-function
Reproducing "clone is not a function" error using @swc/jest

## Steps to reproduce

This repository contains a setup that reproduces the "clone is not a function" error that only seems to be present when
using `@swc/jest`. The `jest.config.js` has been configured to default to use `@swc/jest`, but you may set `TEST_PRESET=ts-jest`
to run with `ts-jest` instead of `@swc/jest`.

The environment where this test was ran was using NodeJS `18.17.0` running on macOS 13.4.1 running on an Intel Core i7 processor.

* Install: `npm ci`
* Run tests:
  * With `ts-jest`: `TEST_PRESET=ts-jest npm test` (pass)
    ```
    $ TEST_PRESET=ts-jest npm test

    > clone-not-function@1.0.0 test
    > jest

    PASS  src/index.test.ts
    example
        ✓ should return "example" (3 ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        1.969 s
    Ran all test suites.
    ```
  * With `@swc/jest`: `TEST_PRESET=@swc/jest npm test` (fail)
    ```
    $ TEST_PRESET=@swc/jest npm test

    > clone-not-function@1.0.0 test
    > jest

    FAIL  src/index.test.ts
    ● Test suite failed to run

        TypeError: clone is not a function

        at Object.<anonymous> (node_modules/graceful-fs/graceful-fs.js:96:24)
        at Object.<anonymous> (node_modules/expect/build/toThrowMatchers.js:9:24)
        at Object.<anonymous> (node_modules/expect/build/index.js:23:48)
        at _expect (node_modules/@jest/expect/build/index.js:8:16)
        at createJestExpect (node_modules/@jest/expect/build/index.js:29:3)
        at Object.<anonymous> (node_modules/@jest/expect/build/index.js:39:20)

    Test Suites: 1 failed, 1 total
    Tests:       0 total
    Snapshots:   0 total
    Time:        1.675 s, estimated 2 s
    Ran all test suites.

    ```
