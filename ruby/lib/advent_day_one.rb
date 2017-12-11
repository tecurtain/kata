require 'pry'

class Captcha

  def initialize
    @input_array = []
    @sum_array = [0]
  end

  def to_array(input)
    @input_array = input.each_char.map(&:to_i)
  end

  def calculate_first_mid_element
    array_index = 0
    mid_array_index = @input_array.length / 2
    while array_index < @input_array.length
      if @input_array[array_index] == @input_array[array_index + mid_array_index]
        @sum_array << @input_array[array_index] + @input_array[array_index + mid_array_index]
        array_index += 1
      else
        array_index += 1
      end
    end
  end

  def calculate_total
    calculate_first_mid_element
    @sum_array.reduce(:+)
  end
end
