const assert = require('chai').assert;
const sayHello = require('../index').sayHello;
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
})
