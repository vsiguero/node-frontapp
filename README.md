# frontapp

> FrontApp Node.js API Wrapper using promises (or callbacks if needed) with Typescrypt, Webpack and Jest.

This project is based on frontapp-node by @oitozero

## Installation

```bash
npm install frontapp-node-ts
```

## Testing using Jest

```bash
npm run test
```

## Running the code locally

Compile using typescript & webpack:

```bash
npm run build
```

Require FrontApp:

```node
const FrontAppClient = require('./dist');
```

## Usage

Require FrontApp:

```node
const FrontAppClient = require('frontapp-node-ts');
```

Or if you're using Typescript:

```node
import FrontAppClient from 'frontapp-node-ts';
```

Create a client:

#### Using Front's API JWT Access Tokens

```node
const frontApp = new FrontAppClient('front_api_token');
```

## Promises & async/await

This client library by default supports Promises or Async/Await:

```node
frontApp.clients.get({}).then(function (r) {
  // ...
});
```

```node
try {
  await frontApp.clients.get({});
} catch(err: FrontAppError) {
  console.log(err);
}
```

## Callbacks

This client library also supports callbacks:

```node
const frontApp = new FrontApp('front_api_token').useCallbacks();
```

And then:

```node
frontApp.clients.get({}, (err, res) => {
  // err is an error object, or null
  // res is a successful response object, or null
});
```
