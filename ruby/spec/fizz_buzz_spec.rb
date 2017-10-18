require_relative "../lib/fizz_buzz"

RSpec.describe FizzBuzz do
  it "returns [1] for 1 and 1" do
    expect(FizzBuzz.call(1, 1)).to eq [1]
  end
  xit "handles ranges" do
    expect(FizzBuzz.call(3,7)).to eq ["Fizz", 4, "Buzz", "Fizz", 7]
  end
  xit "handles ranges including FizzBuzz" do
    expect(FizzBuzz.call(7,15)).to eq [7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
  end


  # it "returns ? for -1"
  # it "returns [] for 0" do
  #   expect(FizzBuzz.call(0)).to eq []
  # end
  #
  # it "returns [1] for 1" do
  #   expect(FizzBuzz.call(1)).to eq [1]
  # end
  # it "returns [1,2] for 2" do
  #   expect(FizzBuzz.call(2)).to eq [1,2]
  # end
  # it "returns [1,2,Fizz] for 3" do
  #   expect(FizzBuzz.call(3)).to eq [1,2,"Fizz"]
  # end
  # it "returns [1,2,Fizz,4,Buzz] for 5" do
  #   expect(FizzBuzz.call(5)).to eq [1,2,"Fizz",4,"Buzz"]
  # end
  # it "returns [1,2..14,FizzBuzz] for 15" do
  #   expect(FizzBuzz.call(15)).to eq [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
  # end
end
