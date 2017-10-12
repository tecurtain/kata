require_relative "../lib/fizz_buzz"

RSpec.describe FizzBuzz do
  it "returns [1] for 1" do
    expect(FizzBuzz.call(1)).to eq [1]
  end
  it "returns [1,2] for 2"
end
