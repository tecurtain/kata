require 'pry'

class FizzBuzz
  def self.call(length)
    replaceNumWithString(1.upto(length))
  end

  def self.replaceNumWithString(a)
    a.map { |x| x % 3 == 0 && x % 5 == 0 ? 'FizzBuzz' : x }
     .map { |x| x % 3 == 0 ? 'Fizz' : x }
     .map { |x| x % 5 == 0 ? 'Buzz' : x }
  end
end
