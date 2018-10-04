describe("GradeConverter", function () {
  var GradeConverter = require('../../lib/GradeConverter');

  it("should convert A to 12", function () {
    expect(GradeConverter('A')).toBe(12);
  });

  it("should convert B to 10", function () {
    expect(GradeConverter('B')).toBe(10);
  });

  it("should throw empty value", function () {
    expect(() => GradeConverter('')).toThrowError("invalid grade");

  });

  it("should fail convert if grade doesn't exist", function () {
    expect(() => GradeConverter('X')).toThrowError("invalid grade");
  });

});
