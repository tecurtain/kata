require 'pry'

class FizzBuzz
  def self.call(length)
    a = Array.new(length) {|i| i+1 }
    b = a.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
    c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
    d = c.map { |x| x % 5 === 0 ? 'Buzz' : x }
    d
  end
end
