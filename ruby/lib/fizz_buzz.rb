require 'pry'

class FizzBuzz
  def self.call(length)
    a = Array.new(length) { |i| i+1 }
    replaceNumWithString(a)
  end

  def self.replaceNumWithString(a)
    a.map { |x| x % 3 == 0 && x % 5 == 0 ? 'FizzBuzz' : x }
     .map { |x| x % 3 == 0 ? 'Fizz' : x }
     .map { |x| x % 5 == 0 ? 'Buzz' : x }
  end
end

# .MAP Method
# [1,2,3].map {|x| x + 1 }

# upto
