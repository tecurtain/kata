require 'pry'

class FizzBuzz
  def self.call(length)
    a = Array.new(length) {|i| i+1 }
    b = a.map { |x| x % 3 === 0 && x % 5 === 0 ? 'Fizz' : x }
    b
  end
end

# EACH
# arr = [1, 2, 3, 4, 5]
# arr.each { |a| print a -= 10, " " }
