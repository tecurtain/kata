require_relative "../lib/bowling_game"

RSpec.describe BowlingGame do
  it "can bowl a gutter game of all zeros" do
    expect(BowlingGame.call(0)).to eq [0]
  end
  it "can bowl a game of all ones"
  it "can bowl a game with a spare"
  it "can bowl a game with a strike"
  it "can bowl a perfect game"
end
