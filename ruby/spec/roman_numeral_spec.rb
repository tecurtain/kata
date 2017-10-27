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
  it "returns IV for 4" do
    expect(ArabicToRoman.call(4)).to eq "IV"
  end
  it "returns V for 5" do
    expect(ArabicToRoman.call(5)).to eq "V"
  end
  it "returns X for 10" do
    expect(ArabicToRoman.call(10)).to eq "X"
  end
  it "returns XIV for 14" do
    expect(ArabicToRoman.call(14)).to eq "XIV"
  end
  it "returns L for 50" do
    expect(ArabicToRoman.call(50)).to eq "L"
  end
  it "returns CXLIV for 144" do
    expect(ArabicToRoman.call(144)).to eq "CXLIV"
  end
  it "returns C for 100" do
    expect(ArabicToRoman.call(100)).to eq "C"
  end
  it "returns D for 500" do
    expect(ArabicToRoman.call(500)).to eq "D"
  end
  it "returns M for 1000" do
    expect(ArabicToRoman.call(1000)).to eq "M"
  end
  it "returns MCXLIV for 1144" do
    expect(ArabicToRoman.call(1144)).to eq "MCXLIV"
  end
end
