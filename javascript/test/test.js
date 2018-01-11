var chai = require('chai');
var expect = chai.expect;
var CheckSum = require('../index');

describe('CheckSum', () => {

  var check;
  beforeEach(function() {
    check = new CheckSum();
  });

  it('can minus the first rows largest and smallest values, which are 9 and 2', () => {
    expect(check.arraySum(0)).to.equal(7)
  })

  it('can minus the second rows largest and smallest values, which are 9 and 3', () => {
    expect(check.arraySum(1)).to.equal(6)
  })

  it('can minus the third rows largest and smallest values, which are 8 and 3', () => {
    expect(check.arraySum(2)).to.equal(5)
  })

  it('the spreadsheets checksum would be 8 + 4 + 6', () => {
    expect(check.transform()).to.equal(18);
  });
});
