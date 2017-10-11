import chai from "chai"
import {fizzBuzz, buzzFizz} from "../index"


let expect = chai.expect

describe("fizzBuzz", () => {
  it("returns array containing 1 for 1", () => {
    expect(fizzBuzz(1)).to.deep.include.members([1])
  })
})

describe("buzzFizz", () => {
  it("returns array containing 1 for 1", () => {
    expect(buzzFizz(1)).to.deep.include.members([1])
  })
})

// If I pass in Agument of 7 I will get an array of 7 elements
// [1,2,fizz,4,buzz,fizz,7]
// at 15 should have "fizzBuzz" for the first time

// next test case should be 2 then 3, then 4 so on

// practice extracting vaiables, or inlines, or function calls and inline
