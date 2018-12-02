define(function (require, exports, module) {
  const add = require('add');

  describe('add', function () {
    it('1 + 1', function () {
      expect(add(1, 1)).toEqual(2);
    });
  });
});
