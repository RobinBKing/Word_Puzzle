describe('vowelCheck', function() {
  it("is true for any sentence with a vowel", function() {
      expect(vowelCheck("check for vowels")).to.equal(true);
  });
  it("is false for any sentence with no vowels", function() {
      expect(vowelCheck("lr rk")).to.equal(false);
  });
});
