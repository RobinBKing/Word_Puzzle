describe('vowelCheck', function() {
  it("is true for any sentence with a vowel", function() {
      expect(vowelCheck("check for vowels")).to.equal(true);
  });
  it("is false for any sentence with no vowels", function() {
      expect(vowelCheck("lr rk")).to.equal(false);
  });
  it("will replace vowels in a sentence.", function() {
      expect(convertSentence("check for vowels")).to.equal("ch-ck f-r v-w-ls");
  });
  it("will not replace vowels in a sentence.", function() {
      expect(convertSentence("lr rk")).to.equal("");
  });
});
