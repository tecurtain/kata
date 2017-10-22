import chai from "chai"
import {romanNumerals} from "../index"


let expect = chai.expect

describe("romanNumerals", () => {
  it("returns roman number I for 1", () => {
    expect(romanNumerals(1)).to.include("I")
  })
})

// In the Roman Numerals kata, we convert Arabic numbers
// (the one we use daily: 1, 2, 3, 4, 5, …)
// into their Roman equivalent: I, II, III, IV, V
