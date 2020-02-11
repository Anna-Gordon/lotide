const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');


describe("#tail", () => {

  it ("should return [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it ("should return [1] for [2, 1]", () => {
    assert.deepEqual(tail([2, 1]), [1]);
  });

});