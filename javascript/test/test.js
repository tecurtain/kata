import chai from "chai"
import {arabicToRoman} from "../index"


let expect = chai.expect

describe("arabicToRoman", () => {
  it("returns roman number I for 1", () => {
    expect(arabicToRoman(1)).to.include("I")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number II for 2", () => {
    expect(arabicToRoman(2)).to.include("II")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number III for 3", () => {
    expect(arabicToRoman(3)).to.include("III")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number IV for 4", () => {
    expect(arabicToRoman(4)).to.include("IV")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number V for 5", () => {
    expect(arabicToRoman(5)).to.include("V")
  })
})


// In the Roman Numerals kata, we convert Arabic numbers
// (the one we use daily: 1, 2, 3, 4, 5, …)
// into their Roman equivalent: I, II, III, IV, V
