# emoJson

Emoji 5.0 as described [here](http://unicode.org/emoji/charts/index.html) in a node module


## Installation

  `npm install emojson`

## Usage

    const emojson = require('emojson');

    const toPrint = emojson.getData().map( elem => elem.emoji + '\t' + elem.description)

    toPrint.forEach(elem => console.log(elem))


## Tests

  `npm test`

## Contributing

  Please contribute in every way you feel like (e.g. pull request, feedback, beers). Reach me at inf.baroni@gmail.com or https://linkedin.com/in/alebaroni
