const expect = require('chai').expect;
const emoJson = require('../emoJson.js');

describe('#emoJson', function() {
    it('should contain a getData function', function() {
        expect(emoJson).to.have.property('getData');
    });

});
