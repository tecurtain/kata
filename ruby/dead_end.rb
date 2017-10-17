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


require 'pry'

class FizzBuzz
  def self.call(length)
    a = Array.new(length) { |i| i+1 }
    b = a.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
    c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
    d = c.map { |x| x % 5 === 0 ? 'Buzz' : x }
    d
  end

  def self.replaceNumWithString(i)
    i.each do |number|
      val = case
            when (number % 3 == 0) && (number % 5 == 0)
              "FizzBuzz"
            when (number % 3 == 0)
              "Fizz"
            when (number % 5 == 0)
              "Buzz"
            else
              number
            end

      puts val
    end
  end
end
