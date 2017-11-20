require_relative "../lib/bowling_game"

RSpec.describe BowlingGame do
  it "returns [1] for 1" do
    expect(BowlingGame.call(1)).to eq [1]
  end
  it "returns [1,2] for 2"
end
