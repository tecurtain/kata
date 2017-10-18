require 'pry'

class FizzBuzz
  def self.call(x, y)
    a = (x..y).to_a
    replaceNumWithString(a)
  end

  def self.replaceNumWithString(a)
    a.map { |x| x % 3 == 0 && x % 5 == 0 ? 'FizzBuzz' : x }
     .map { |x| x % 3 == 0 ? 'Fizz' : x }
     .map { |x| x % 5 == 0 ? 'Buzz' : x }
  end
end
