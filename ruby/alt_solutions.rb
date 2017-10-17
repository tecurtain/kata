(1..15).each do |number|
  val = case
        when (number % 3 == 0) && (number % 5 == 0)
          "Hello World"
        when (number % 3 == 0)
          "Hello"
        when (number % 5 == 0)
          "World"
        else
          number
        end

  puts val
end
