require_relative '../lib/advent_day_one'

RSpec.describe Captcha do
  before do
    @execute = Captcha.new
  end

  it('returns 6 given 1212') do
    @execute.to_array('1212')
    expect(@execute.calculate_total).to eq(6)
  end
  it('returns 0 given 1221') do
    @execute.to_array('1221')
    expect(@execute.calculate_total).to eq(0)
  end
  it('returns 4 given 123425') do
    @execute.to_array('123425')
    expect(@execute.calculate_total).to eq(4)
  end
  it('returns 12 given 123123') do
    @execute.to_array('123123')
    expect(@execute.calculate_total).to eq(12)
  end
  it('returns 4 given 12131415') do
    @execute.to_array('12131415')
    expect(@execute.calculate_total).to eq(4)
  end
end

#
# Now, instead of considering the next digit, it wants you to consider the digit halfway around the circular list. That is, if your list contains 10 items, only include a digit in your sum if the digit 10/2 = 5 steps forward matches it. Fortunately, your list has an even number of elements.
#
# For example:
#
# 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
# 1221 produces 0, because every comparison is between a 1 and a 2.
# 123425 produces 4, because both 2s match each other, but no other digit has a match.
# 123123 produces 12.
# 12131415 produces 4.
