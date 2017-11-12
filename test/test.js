var assert = require('assert');
var utils = require('../utils');

describe('check if is palindrome', function() {
    it('"civic" should return true', function() {
        assert.equal(true, utils.checksPermutationPalindrome('civic'));
    });

    it('"ivicc" should return true', function() {
        assert.equal(true, utils.checksPermutationPalindrome('ivicc'));
    });

    it('"civil" should return false', function() {
        assert.equal(false, utils.checksPermutationPalindrome('civil'));
    });

    it('"livci" should return false', function() {
        assert.equal(false, utils.checksPermutationPalindrome('livci'));
    });
});

/*describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});*/