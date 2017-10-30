require "pry"

class ArabicToRoman

  NUMERALS = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
  ]

    def self.call(number)
    numberConvert = ""
    NUMERALS.each do |romanNumeral, decimalValue|
      while decimalValue <= number
        numberConvert += romanNumeral
        number -= decimalValue
      end
    end
    numberConvert
  end
end
