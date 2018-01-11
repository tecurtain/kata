var chai = require('chai');
var expect = chai.expect;
var CheckSum = require('../index');

describe('CheckSum', () => {

  var check;
  beforeEach(function() {
    check = new CheckSum();
  });

  it('The first rows largest and smallest values are 9 and 2', () => {
    expect(check.transform()).to.equal(18);
  });
});
