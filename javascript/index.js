function BowlingGame() {
  var rolls = [];

  this.roll = (pins) => {
    rolls.push(pins);
  }

  this.score = () => {
    var score = 0;
    var i = 0;
    for (var frame = 0; frame < 10; frame++) {
      // Spare
      if (rolls[i] + rolls[i + 1] === 10) {
        score += 10 + rolls[i + 2];
        i +=2;
      } else {
        score += rolls[i] + rolls[i + 1];
        i += 2;
      }
    }
    return score
  }
}

module.exports = BowlingGame
// if first strike, return X

// takes two arguments, first roll and second roll, pushes them to an array?  Frame 1 - 10.  Two rolls per frame, exepct for last frame which is 3 rolls total.  Strike is when all 10 pins are knocked down on the first try.

// Frame 1 - 10
// Strike 10 pins - Bonus equals the 10 pins plus the value of the next two balls rolled
//

// Return Total Score
// let score() => {
//   return total score
// }
//
// export {BowlingGame}
