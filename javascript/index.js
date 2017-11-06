function BowlingGame() {
  var rolls = [];

  this.roll = (pins) => {
    rolls.push(pins);
  }

  let isSpare = (frameIndex) => {
    return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
  }

  let isStrike = (frameIndex) => {
    return rolls[frameIndex] === 10
  }

  let sumOfBallsInFrame = (frameIndex) => {
    return rolls[frameIndex] + rolls[frameIndex + 1];
  }

  let spareBonus = (frameIndex) => {
    return rolls[frameIndex + 2];
  }

  let strikeBonus = (frameIndex) => {
    return rolls[frameIndex + 1] + rolls[frameIndex + 2];
  }

  this.score = () => {
    var score = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
      // Strike
      if (isStrike(frameIndex)) {
        score += 10 + strikeBonus(frameIndex);
        frameIndex++
      } else if (isSpare(frameIndex)) {
        score += 10 + spareBonus(frameIndex);
        frameIndex +=2;
      } else {
        score += sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
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
