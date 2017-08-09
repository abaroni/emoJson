const expect = require('chai').expect;
const emoJson = require('../emoJson.js');

describe('emoJson interface', function() {
    it('should contain a getData function', function() {
        expect(emoJson).to.have.property('getData');
    });

});

describe('emoJson schema', function() {
    emoJson.getData().forEach(function (element){
      it('should conform to emoJson schema', function() {
          expect(element).to.have.property('id');
          expect(element).to.have.property('generalCategory');
          expect(element).to.have.property('category');
          expect(element).to.have.property('codepoints');
          expect(element).to.have.property('emoji');
          expect(element).to.have.property('description');
          expect(element).to.have.property('tags');
      });
    });

});
