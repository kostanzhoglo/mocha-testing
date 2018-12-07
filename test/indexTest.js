const assert = require('chai').assert;
// Bring in Specific functions from other file.  Can call them by function name later...
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;
// OR, bring in ENTIRE file (as below)
// const index = require('../index');
    // if choosing that option, you need to write the tests like this later...
    //   it('sayHello() should return type string', () => {
      //   let result = index.sayHello();
      //   assert.typeOf(result, 'string')
      // })

describe('App', () => {
  it('sayHello() should return "hello"', () => {
    let result = sayHello();
    assert.equal(result, "hello")
    // assert.equal(app(), "hello")
  })

  it('sayHello() should return type string', () => {
    let result = sayHello();
    assert.typeOf(result, 'string')
  })

  it('addNumbers() should return correct sum', () => {
    let result = addNumbers(4, 9);
    assert.equal(result, 13)
  })

  it('addNumbers() should be above 5', () => {
    let result = addNumbers(5,50);
    assert.isAbove(result, 5);
  })

  it('addNumbers() should return type number', () => {
    let result = addNumbers();
    assert.typeOf(result, 'number')
  })
})
