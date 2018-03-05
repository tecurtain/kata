import chai from "chai"
import { filter } from "../index"

let expect = chai.expect

describe("filter", () => {
  it("returns the exact array that was passed to the function if the predicate returns true every time", () => {
    var input = [1,2,3]
    var predicate = function(x) { return true }
    //var predicate = x => true
    var expectedOutput = [1,2,3]
    expect(filter(input, predicate)).to.eq(expectedOutput)
  })
  it("returns an empty array", () => {
    var input = [1,2,3]
    var predicate = function(x) { return false }
    //var predicate = x => false
    var expectedOutput = []
    expect(filter(input, predicate)).to.eq(expectedOutput)
  })
  it("returns array containing [true, true]", () => {
    var input = [1,2,3]
    var predicate = function(x) { return x }
    //var predicate = x => x
    var expectedOutput = [true, true]
    expect(filter(input, predicate)).to.eq(expectedOutput)
  })
  it("returns array containing ['a','c']", () => {
    var input = [1,2,3]
    var predicate = function(x) { x != 'b' }
    //var predicate = x => x != 'b'
    var expectedOutput = ['a', 'c']
    expect(filter(input, predicate)).to.eq(expectedOutput)
  })
})

// Test cases
// filter([1,2,3], x => true) == [1,2,3]
// filter([1,2,3], x => false) == []
// filter([true,false,true], x => x) == [true, true]
// filter(['a','b','c'], x => x != 'b') == ['a','c']
