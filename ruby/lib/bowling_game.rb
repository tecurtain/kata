require "pry"

class BowlingGame
  def initialize
    @rolls = []
  end

  def roll(pins)
    @rolls.push(pins)
  end

  def score
    score = 0
    @rolls.each do |x|
      score += x
    end
    score
  end
end
