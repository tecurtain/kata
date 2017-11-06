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

  it('can bowl a gutter game', () => {
    rollMany(20, 0);
    expect (game.score()).to.equal(0);
  });

  it('can bowl a game of all ones', () => {
    rollMany(20, 1);
    expect (game.score()).to.equal(20);
  });

  it('can bowl one spare', () => {
    game.roll(5);
    game.roll(5); //spare
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).to.equal(16);
  });

});

// can bowl a game of all 1's
// can bowl a game w/ 1 spare
// can bowl a game w/ 1 strike
// can bowl a game w/ all strikes ie 300 game


// The game consists of 10 frames as shown above. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
//
// A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)
//
// A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.
//
// In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.
//
