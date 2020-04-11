# node-frontapp

> FrontApp API Wrapper on node.js using promises (or callbacks) with Typescrypt and Jest.

This project is based on frontapp-node by @oitozero

## Installation

```bash
npm install node-frontapp
```

## Running the code locally

Compile using Typescript:

```bash
npm run build
```

## Usage

You can directly import the library using the default export:

```node
import { FrontAppClient, FrontAppError } from 'node-frontapp';
```

Or if you're using require:

```node
const FrontAppClient = require('node-frontapp');
```

### Create a client instance:

> Note that you will need Front's API JWT Access Token.

Using the class constructor:

```node
const frontApp = new FrontAppClient('front_api_token');
```

### Promises & async/await

This client library supports node (+8.x) native promises by default:

```node
FrontAppClient.clients.get({}).then(function (r) {
  // ...
});
```

Or the async/await version:

```node
try {
  await FrontAppClient.clients.get({});
} catch(err: FrontAppError) {
  console.log(err);
}
```

### ...or even callbacks

This client library also supports callbacks:

```node
const frontApp = new FrontAppClient('front_api_token').useCallbacks();
```

And then:

```node
FrontAppClient.clients.get({}, (err, res) => {
  // err is an error object, or null
  // res is a successful response object, or null
});
```

## Testing using Jest

```bash
npm run test
```
