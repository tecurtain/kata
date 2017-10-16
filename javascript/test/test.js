import chai from "chai"
import {fizzBuzz} from "../index"


let expect = chai.expect


describe("fizzBuzz", () => {
  it("returns an empty array if given nothing", () => {
    expect(fizzBuzz()).to.deep.include.members([])
  })
})

describe("fizzBuzz", () => {
  it("returns an empty array if given a negative number", () => {
    expect(fizzBuzz(-1)).to.deep.include.members([])
  })
})

describe("fizzBuzz", () => {
  it("returns array containing 1 for 1", () => {
    expect(fizzBuzz(1)).to.have.ordered.members([1])
  })
})

describe("fizzBuzz", () => {
  it("returns an array with ordered elements 1 and 2", () => {
    expect(fizzBuzz(2)).to.have.ordered.members([1,2])
  })
})

describe("fizzBuzz", () => {
  it("returns an array with ordered elements 1, 2 and Fizz", () => {
    expect(fizzBuzz(3)).to.have.ordered.members([1,2,"Fizz"])
  })
})

describe("fizzBuzz", () => {
  it("returns an array with ordered elements 1, 2, Fizz, 4, Buzz", () => {
    expect(fizzBuzz(5)).to.have.ordered.members([1,2,"Fizz",4,"Buzz"])
  })
})

describe("fizzBuzz", () => {
  it("returns an array with ordered elements 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz", () => {
    expect(fizzBuzz(15)).to.have.ordered.members([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"])
  })
})

// If I pass in Agument of 7 I will get an array of 7 elements
// [1,2,fizz,4,buzz,fizz,7]
// at 15 should have "fizzBuzz" for the first time

// next test case should be 2 then 3, then 4 so on

// practice extracting vaiables, or inlines, or function calls and inline

// STEP 1:
// the function fizzBuzz takes an argument (number)
// the argument is a number
// an array is created with the number of elements equal to the number provided by the (number) arugment
// each element is filled with the equvilent
//number except for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”
