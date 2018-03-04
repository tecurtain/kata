import chai from "chai"
import {filter, filterFunc} from "../index"


let expect = chai.expect

describe("filter", () => {
  it("returns the exact array that was passed to the function", () => {
    expect([1,2,3], x => true).to.deep.include.members([1,2,3])
  })
  it("returns an empty array", () => {
    expect([1,2,3], x => false).to.deep.include.members([])
  })
  it("returns array containing [true, true]", () => {
    expect([true,false,true], x => x).to.deep.include.members([true, true])
  })
  it("returns array containing ['a','c']", () => {
    expect(['a','b','c'], x => x != 'b').to.deep.include.members(['a','c'])
  })
})

// Test cases
// filter([1,2,3], x => true) == [1,2,3]
// filter([1,2,3], x => false) == []
// filter([true,false,true], x => x) == [true, true]
// filter(['a','b','c'], x => x != 'b') == ['a','c']
