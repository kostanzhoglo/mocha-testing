const assert = require('chai').assert;
// Bring in Specific functions from other file.  Can call them by function name later...
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;
const printName = require('../index').printName;
// OR, bring in ENTIRE file (as below)
// const index = require('../index');
    // if choosing that option, you need to write the tests like this later...
    //   it('sayHello() should return type string', () => {
      //   let result = index.sayHello();
      //   assert.typeOf(result, 'string')
      // })

const sayHelloResult = sayHello();
const addNumbersResult = addNumbers(4, 9);
const printNameResult = printName({ first: "Johnny", last: "Bobkins", age: 23 })

describe('App', () => {
  describe('sayHello()', () => {
    it('should return "hello"', () => {
      // let result = sayHello();
      assert.equal(sayHelloResult, "hello")
      // assert.equal(app(), "hello")
    })

    it('should return type string', () => {
      let result = sayHello();
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers()', () => {
    it('addNumbers() should return correct sum', () => {
      // let result = addNumbers(4, 9);
      assert.equal(addNumbersResult, 13)
    })

    it('should be above 5', () => {
      // let result = addNumbers(5,50);
      assert.isAbove(addNumbersResult, 5);
    })

    it('should return type number', () => {
      // let result = addNumbers();
      assert.typeOf(addNumbersResult, 'number')
    })
  })

  describe('printName()', () => {
    it('should print last name, followed by first name', () => {
      assert.equal(printNameResult, "Bobkins, Johnny");
    })
  })
})
