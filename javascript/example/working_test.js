var chai = require('chai');
var expect = chai.expect;
var BowlingGame = require('../index');

describe('BowlingGame', () => {

  var g;
  beforeEach(function() {
    g = new BowlingGame();
  });

  let rollMany = (n, pins) => {
    for (var i = 0; i < n; i++) {
      g.roll(pins);
    }
  }

  let rollSpare = () => {
    g.roll(5);
    g.roll(5);
  }

  let rollStrike = () => {
    g.roll(10);
  }

  it('can bowl a gutter game', () => {
    rollMany(20, 0);
    expect (g.score()).to.equal(0);
  });

  it('can bowl a game of ones', () => {
    rollMany(20, 1);
    expect(g.score()).to.equal(20);
  });

  it('can bowl one spare', () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).to.equal(16);
  });

  it('can bowl one strike', () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).to.equal(24);
  });

  it('can bowl a perfect game', () => {
    rollMany(12, 10);
    expect(g.score()).to.equal(300)
  });
});
