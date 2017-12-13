var chai = require('chai');
var expect = chai.expect;
var CheckSum = require('../index');

describe('CheckSum', () => {

  var check;
  beforeEach(function() {
    check = new CheckSum();
  });

  it('is an array', () => {
    expect(check.calc()).to.equal(21);
  });
});
