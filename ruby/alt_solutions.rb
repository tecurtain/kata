(1..15).each do |number|
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
