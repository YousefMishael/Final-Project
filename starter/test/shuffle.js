import { assert, expect } from "chai";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

describe("shuffle function", () => {
  it("should shuffle the indexes of an array (using expect)", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(originalArray);

    // Using expect
    expect(shuffledArray).to.have.lengthOf(originalArray.length);
    expect(shuffledArray).to.include.members(originalArray);
    expect(shuffledArray).to.not.eql(originalArray);
  });

  it("should handle empty arrays (using assert)", () => {
    const result = shuffle([]);
    // Using assert
    assert.strictEqual(result.length, 0);
    assert.deepStrictEqual(result, []);
  });

  it("should handle single-element arrays (mixed assertions)", () => {
    const result = shuffle([42]);
    // Using both styles
    expect(result).to.eql([42]);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0], 42);
  });
});
