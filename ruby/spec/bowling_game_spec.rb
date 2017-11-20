require_relative "../lib/bowling_game"

RSpec.describe BowlingGame do
  before do
    @game = BowlingGame.new
  end

  def roll_many(n, pins)
    n.times do
      @game.roll(pins)
    end
  end

  it "can bowl a gutter game of all zeros" do
    roll_many(20, 0)

    expect(@game.score).to eq(0)
  end

  it "can bowl a game of all ones" do
     roll_many(20, 1)

     expect(@game.score).to eq(20)
   end

  it "can bowl a game with a spare" do
    2.times { @game.roll(5) }
    @game.roll(3)
    roll_many(17, 0)

    expect(@game.score).to eq(16)
  end

  it "can bowl a game with a strike" do
    @game.roll(10)
    @game.roll(3)
    @game.roll(4)
    roll_many(16, 0)

    expect(@game.score).to eq(24)
  end
  it "can bowl a perfect game" do
    roll_many(12, 10)

    expect(@game.score).to eq(300)
  end

end
