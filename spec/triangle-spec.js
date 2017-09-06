var Triangle = require('./../js/triangle.js').triangleModule;

describe('Triangle' , function() {

  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5,5,5);
  });

  it ('should show how beforeEach() works' , function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides' , function(){
    var triangle = new Triangle(3,4,5)
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)

  });

  it('should correctly determine whther three lengths can be mad into a triangle', function(){
    var notTriangle = new Triangle(2,9,22)
    expect(notTriangle.checkType()).toEqual("not a triangle");
  })
});
