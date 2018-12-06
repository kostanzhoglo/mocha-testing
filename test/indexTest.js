const assert = require('chai').assert;
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;
// const app = require('../index');

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
})
