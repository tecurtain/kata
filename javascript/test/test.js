import chai from "chai"
import {fizzBuzz} from "../index"

let expect = chai.expect

describe("fizzBuzz", () => {
  it("returns array containing 1 for 1", () => {
    expect(fizzBuzz(1)).to.deep.include.members([1])
  })
})
