# nara-node

A Node client for the [National Archives API](https://github.com/usnationalarchives/Catalog-API).

## Installation

```bash
  npm install nara-node
```

## Usage

```javascript
  var nara = require('nara-node');

  nara({
      search: {
          q: 'nixon',
          rows: '10',
          offset: '20'
      }
  }, function (err, result) {
      // Do stuff with records
  });
```

## TODO

  A lot. Tests. Write capabilities for tagging and transcriptions. Authentication. More I'm sure. 

## Contributing

Pull requests please.

## Copyright

Written by David Naffis. See LICENSE.txt for further details.