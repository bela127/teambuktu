define(function (require, exports, module) {
  describe('jquery', function () {
    it('extend', function () {
      const extended = $.extend({a: 1}, {b: 2});
      expect(extended).toEqual({a: 1, b: 2});
    });
  });
});
