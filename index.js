module.exports = {
  sayHello: () => {
    // TESTS SHOULD FAIL w/ BELOW line...
    // return 1;
    return 'hello';
  },
  addNumbers: (val1, val2) => {
    return val1 + val2;
  },
  printName: (person) => {
    return `${person.last}, ${person.first}`
  }
}
