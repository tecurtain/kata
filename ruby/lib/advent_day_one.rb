require 'pry'

class Captcha

  def initialize
    @answer = []
  end

  def calculate(input)
    @answer += input.each_char.map(&:to_i)
  end

  def answer
    @answer
  end

end
