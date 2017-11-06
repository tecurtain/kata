var chai = require('chai');
var expect = chai.expect;
var BowlingGame = require('../index');

describe('BowlingGame', () => {

  var game;
  beforeEach(function() {
    game = new BowlingGame();
  });

  let rollMany = (n, pins) => {
    for (var i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  let rollSpare = () => {
    game.roll(5);
    game.roll(5);
  }

  let rollStrike = () => {
    game.roll(10);
  }

  it('can bowl a gutter game', () => {
    rollMany(20, 0);
    expect (game.score()).to.equal(0);
  });

  it('can bowl a game of ones', () => {
    rollMany(20, 1);
    expect(game.score()).to.equal(20);
  });

  it('can bowl one spare', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).to.equal(16);
  });

  it('can bowl one strike', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).to.equal(24);
  });

  it('can bowl a perfect game', () => {
    rollMany(12, 10);
    expect(game.score()).to.equal(300)
  });
});
