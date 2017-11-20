require "pry"

class BowlingGame
  def initialize
    @rolls = []
  end

  def roll(pins)
    @rolls << pins
  end

  def strike?(frame_index)
    @rolls[frame_index] == 10
  end

  def spare?(frame_index)
    @rolls[frame_index] + @rolls[frame_index + 1] == 10
  end

  def sum_of_balls_in_frame(frame_index)
    @rolls[frame_index] + @rolls[frame_index + 1]
  end

  def score
    score = 0
    frame_index = 0
    frame = 0
    while frame < 10
      if strike?(frame_index)
        score += 10 + @rolls[frame_index + 1] + @rolls[frame_index + 2]
        frame_index += 1
    elsif spare?(frame_index)
      score += 10 + @rolls[frame_index + 2]
      frame_index += 2
    else score += sum_of_balls_in_frame(frame_index)
        frame_index += 2
      end
      frame += 1
    end
    score
  end
end
