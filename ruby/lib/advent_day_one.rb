require 'pry'

class Captcha

  def initialize
    @answer = []
    @sum_array = [0]
  end

  def to_array(input)
    @answer = input.each_char.map(&:to_i)
  end

  def calculate_next_element
    array_index = 0
    while array_index < @answer.length
      if @answer[array_index] == @answer[array_index + 1]
        @sum_array << @answer[array_index]
        array_index += 1
      else
        array_index += 1
      end
    end
  end

  def calculate_first_final_element
    array_index = 0
    array_end = @answer.length - 1
    while array_index < @answer.length
      if @answer[array_index] == @answer[array_index + array_end]
        @sum_array << @answer[array_index + array_end]
        array_index += 1
      else
        array_index += 1
      end
    end
  end

  def calculate_total
    calculate_next_element
    calculate_first_final_element
    @sum_array.reduce(:+)
  end
end

# def answer
#   val = 0
#   @answer.each_with_index do |val, index|
#     while val(index) == val(index + 1)
#     @answer << val
#     @answer
#     end
#   end
# end
