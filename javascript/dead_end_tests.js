describe("fizzBuzz", () => {
  it("returns array containing 1 for 1", () => {
    expect(fizzBuzz(1)).to.deep.include.members([1])
  }),
  it("returns array containing 2 for 2", () => {
    expect(fizzBuzz(2)).to.deep.include.members([2])
  }),
  it("returns array containing 4 for 4", () => {
    expect(fizzBuzz(4)).to.deep.include.members([4])
  }),
  it("returns array containing 6 for 6", () => {
    expect(fizzBuzz(6)).to.deep.include.members([6])
  }),
  it("returns array containing 7 for 7", () => {
    expect(fizzBuzz(7)).to.deep.include.members([7])
  }),
  it("returns array containing 8 for 8", () => {
    expect(fizzBuzz(8)).to.deep.include.members([8])
  })
})

describe("fizzBuzz", () => {
  it("returns array containing fizz for 3", () => {
    expect(fizzBuzz(3)).to.deep.include.members(["fizz"])
  }),
  it("returns array containing buzz for 5", () => {
    expect(fizzBuzz(5)).to.deep.include.members(["buzz"])
  })
})
