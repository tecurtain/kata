require_relative "../lib/bowling_game"

RSpec.describe BowlingGame do
  before do
    @game = BowlingGame.new
  end

  it "can bowl a gutter game of all zeros" do
    20.times { @game.roll(0) }

    expect(@game.score).to eq(0)
  end

  it "can bowl a game of all ones" do
     20.times { @game.roll(1) }

     expect(@game.score).to eq(20)
   end

  it "can bowl a game with a spare" do
    2.times { @game.roll(5) }
    @game.roll(3)
    17.times { @game.roll(0) }

    expect(@game.score).to eq(16)
  end

  it "can bowl a game with a strike" do
    @game.roll(10)
    @game.roll(3)
    @game.roll(4)
    16.times { @game.roll(0) }

    expect(@game.score).to eq(24)
  end
  it "can bowl a perfect game"

end
