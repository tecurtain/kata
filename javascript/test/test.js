import chai from "chai"
import {arabicToRoman} from "../index"


let expect = chai.expect

describe("arabicToRoman", () => {
  it("returns roman number I for 1", () => {
    expect(arabicToRoman(1)).to.equal("I");
  })
})

describe("arabicToRoman", () => {
  it("returns roman number II for 2", () => {
    expect(arabicToRoman(2)).to.equal("II")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number III for 3", () => {
    expect(arabicToRoman(3)).to.equal("III")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number IV for 4", () => {
    expect(arabicToRoman(4)).to.equal("IV")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number V for 5", () => {
    expect(arabicToRoman(5)).to.equal("V")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number x for 10", () => {
    expect(arabicToRoman(10)).to.equal("X")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number XIV for 14", () => {
    expect(arabicToRoman(14)).to.equal("XIV")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number L for 50", () => {
    expect(arabicToRoman(50)).to.equal("L")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number CXLIV for 144", () => {
    expect(arabicToRoman(144)).to.equal("CXLIV")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number C for 100", () => {
    expect(arabicToRoman(100)).to.equal("C")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number D for 500", () => {
    expect(arabicToRoman(500)).to.equal("D")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number M for 1000", () => {
    expect(arabicToRoman(1000)).to.equal("M")
  })
})

describe("arabicToRoman", () => {
  it("returns roman number MCXLIV for 1144", () => {
    expect(arabicToRoman(1144)).to.equal("MCXLIV")
  })
})

// describe("arabicToRoman", () => {
//   it("converts numbers to Roman Numerals", () => {
//     expect(arabicToRoman(1)).to.equal("I");
//     expect(arabicToRoman(2)).to.equal("II");
//     expect(arabicToRoman(3)).to.equal("III")
//     expect(arabicToRoman(4)).to.equal("IV")
//     expect(arabicToRoman(5)).to.equal("V")
//     expect(arabicToRoman(10)).to.equal("X")
//     expect(arabicToRoman(14)).to.equal("XIV")
//     expect(arabicToRoman(50)).to.equal("L")
//     expect(arabicToRoman(144)).to.equal("CXLIV")
//     expect(arabicToRoman(100)).to.equal("C")
//     expect(arabicToRoman(500)).to.equal("D")
//     expect(arabicToRoman(1000)).to.equal("M")
//     expect(arabicToRoman(1144)).to.equal("MCXLIV")
//   })
// })

// In the Roman Numerals kata, we convert Arabic numbers
// (the one we use daily: 1, 2, 3, 4, 5, …)
// into their Roman equivalent: I, II, III, IV, V
