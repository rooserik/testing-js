var expect = require('chai').expect;
var app = require('./index');

describe('juf',function(){
  describe('isJuf',function(){
    it('should return true if contains 7 or is divisible by 7', function(){
      expect( app.isJuf(7) ).to.equal(true);
      expect( app.isJuf(14) ).to.equal(true);
      expect( app.isJuf(21) ).to.equal(true);
      expect( app.isJuf(17) ).to.equal(true);
      expect( app.isJuf(747) ).to.equal(true);
    })
    it('should return false if it does not contains 7 or is divisible by 7', function(){
      expect( app.isJuf(5) ).to.equal(false);
      expect( app.isJuf(500) ).to.equal(false);
    })
  });

  describe('isDivisibleBy7', function(){
    it('should return true if the input is divisible by 7', function(){
      expect( app.isDivisibleBy7(7) ).to.equal(true);
      expect( app.isDivisibleBy7(14) ).to.equal(true);
      expect( app.isDivisibleBy7(70) ).to.equal(true);
    })
    it('should return false if it is not divisible by 7', function(){
      expect( app.isDivisibleBy7(5) ).to.equal(false);
      expect( app.isDivisibleBy7(500) ).to.equal(false);
    })
  });

  describe('contains7', function(){
    it('should return true if the input contains a 7', function(){
      expect( app.contains7(17) ).to.equal(true);
      expect( app.contains7(47) ).to.equal(true);
      expect( app.contains7(711) ).to.equal(true);
      expect( app.contains7(575) ).to.equal(true);
    })
    it('should return false if the input does not contains 7', function(){
      expect( app.contains7(13) ).to.equal(false);
      expect( app.contains7(21) ).to.equal(false);
      expect( app.contains7(46) ).to.equal(false);
    })
  })
});
