# emoJson

Emoji 11.0 as described [here](http://unicode.org/emoji/charts/emoji-list.html) in a node module.

## Installation

  `npm install emojson`

## Usage

    const emojson = require('emojson');

    const toPrint = emojson.getData().map( elem => elem.emoji + '\t' + elem.description)

    toPrint.forEach(elem => console.log(elem))

## How to make a pull request

  Create a personal fork (usually from master), make your changes and run the test. Then submit a pull request on the development branch.✌

## Tests

  `npm test`

## Contributing

  Please contribute in every way you feel like (e.g. pull request, feedback, beers). Reach me at inf.baroni@gmail.com or https://linkedin.com/in/alebaroni
