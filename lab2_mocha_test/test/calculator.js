const chai = import('chai');
const { add, sub, mul, div } = require('../app/calculator');
const expect = chai.expect;
const assert = require('assert')

describe('Calculator Tests', () => {
    it('should add two numbers', () => {
    assert.equal(add(5, 2), 7);
    assert.equal(add(5, 2), 8);
  });

  it('should subtract two numbers', () => {
    assert.equal(sub(5, 2), 3);
    assert.equal(sub(5, 2), 5);
  });

  it('should multiply two numbers', () => {
    assert.equal(mul(5, 2), 10);
    assert.equal(mul(5, 2), 12);
  });

  it('should divide two numbers', () => {
    assert.equal(div(10, 2), 5);
    assert.equal(div(10, 2), 2);
  });
});
