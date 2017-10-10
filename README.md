# Simple Jest test of web3 1.0
[Jest](https://facebook.github.io/jest/) is a JavaScript testing framework developed by Facebook.

[web3](web3js.readthedocs.io/en/1.0) is a JavaScript client for [Ethereum](https://ethereum.org/).

## Installation
To install
```
git clone https://github.com/naddison36/web3-jest.git
cd web3-jest
npm install
```

## Running the test

To run the Jest test run
```
npm test
```

The simple Jest test in the [web3.test.js](web3.test.js) file is
```
    const Web3 = require("web3");
    
    test("Web3 version", function()
    {
        expect(Web3.version).toEqual("1.0.0-beta.23");
    });
```

## The error
The following is the error I get using a Mac OS X `10.12.6`, node `v6.10.3` and npm `3.10.10`
```
/Users/nick/.nvm/versions/node/v6.10.3/bin/node /Users/nick/Documents/workspaces/web3-jest/node_modules/jest/bin/jest --config "{\"testRegex\":\"(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$\",\"moduleFileExtensions\":[\"ts\",\"tsx\",\"js\",\"jsx\",\"json\"],\"rootDir\":\"/Users/nick/Documents/workspaces/web3-jest\",\"transformIgnorePatterns\":[\"/node_modules/\",\"^/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers\"],\"unmockedModulePathPatterns\":[\"^/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers\"]}" --colors --setupTestFrameworkScriptFile /Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-jasmine.js
 FAIL  ./web3.test.js
  ● Test suite failed to run

    Cannot find module './build/Release/scrypt' from 'index.js'
      
      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:191:17)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.04s
Ran all test suites.
```

To test web3 using node rather than Jest run 
```
node testWeb3.js
```