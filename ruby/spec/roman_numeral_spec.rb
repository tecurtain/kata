require_relative "../lib/arabic_to_roman"

RSpec.describe ArabicToRoman do
  it "returns I for 1" do
    expect(ArabicToRoman.call(1)).to eq "I"
  end
  it "returns II for 2" do
    expect(ArabicToRoman.call(2)).to eq "II"
  end
  it "returns III for 3" do
    expect(ArabicToRoman.call(3)).to eq "III"
  end
end


# In the Roman Numerals kata, we convert Arabic numbers
# (the one we use daily: 1, 2, 3, 4, 5, …)
# into their Roman equivalent: I, II, III, IV, V
