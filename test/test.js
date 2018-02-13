const expect = require('chai').expect
const emoJson = require('../emoJson.js')

describe('emoJson interface', function() {
    it('should contain a getData function', function() {
        expect(emoJson).to.have.property('getData')
    })

})

describe('emoJson schema', function() {
    emoJson.getData().forEach(function (element,index){
      it(`element ${index} should conform to emoJson schema`, function() {
          expect(element).to.have.property('id')
          expect(element.id).to.be.a('string')
          expect(element).to.have.property('generalCategory')
          expect(element.generalCategory).to.be.a('string')
          expect(element).to.have.property('category')
          expect(element.category).to.be.a('string')
          expect(element).to.have.property('codepoints')
          expect(element.codepoints).to.be.an('array')
          expect(element).to.have.property('emoji')
          expect(element.emoji).to.be.a('string')
          expect(element).to.have.property('description')
          expect(element.description).to.be.a('string')
          expect(element).to.have.property('tags')
          expect(element.tags).to.be.an('array')
      })
    })

})

describe('emoji and codepoints', function() {
    emoJson.getData().forEach(function (element,index){
      it(`element ${index} contains an emoji and a consistent array of codepoints`, function() {

          const codePoints = []
          element.codepoints.forEach(codepointStr => {
            codePoints.push(parseInt(codepointStr.substring(2),16))
          })
          const emojiFromCodepoints = String.fromCodePoint.apply(null,codePoints)
          expect(element.emoji).to.equal(emojiFromCodepoints)
      })
    })

})
