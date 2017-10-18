# First Go

class FizzBuzz
  def self.call(length)
    a = Array.new(length) { |i| i+1 }
    b = a.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
    c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
    d = c.map { |x| x % 5 === 0 ? 'Buzz' : x }
    d
  end
end

# --------------------------------------------------------------------

class FizzBuzz
  def self.call(length)
    a = Array.new(length) { |i| i+1 }
    b = a.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
    c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
    d = c.map { |x| x % 5 === 0 ? 'Buzz' : x }
    d
    # implicit return, do not need D
  end

  # def replaceNumWithString(array) do (don't need this do)
  #   b = array.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
  #   c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
  #   d = c.map { |x| x % 5 === 0 ? 'Buzz' : x }
  #
  # end
end

# --------------------------------------------------------------------

class FizzBuzz
  def self.call(length)
    a = Array.new(length) { |i| i+1 }
    replaceNumWithString(a)
  end

  def self.replaceNumWithString(a)
    b = array.map { |x| x % 3 === 0 && x % 5 === 0 ? 'FizzBuzz' : x }
    c = b.map { |x| x % 3 === 0 ? 'Fizz' : x }
    c.map { |x| x % 5 === 0 ? 'Buzz' : x }
  end
end

# --------------------------------------------------------------------

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

# --------------------------------------------------------------------

class FizzBuzz
  def self.call(length)
    # a = Array.new(length) { |i| i+1 }
    replaceNumWithString(1.upto(length))
  end

  def self.replaceNumWithString(a)
    a.map { |x| x % 3 == 0 && x % 5 == 0 ? 'FizzBuzz' : x }
     .map { |x| x % 3 == 0 ? 'Fizz' : x }
     .map { |x| x % 5 == 0 ? 'Buzz' : x }
  end
end

# --------------------------------------------------------------------
# RANGE
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
