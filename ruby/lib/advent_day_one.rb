require 'pry'

class Captcha

  def initialize
    @answer = 0
  end

  def calculate(input)
    @answer += input
  end

  def answer
    @answer
  end

end
