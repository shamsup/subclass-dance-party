describe('PersonDancer', function() {

  var personDancer;

  beforeEach(function() {
    personDancer = makePersonDancer(10, 20, 100);
  });

  it('should have a jQuery _$node object', function() {
    expect(personDancer._$node).to.be.an.instanceof(jQuery);
  });
  it('should be an instance of Dancer and PersonDancer', function() {
    expect(personDancer).to.be.an.instanceof(Dancer);
    expect(personDancer).to.be.an.instanceof(PersonDancer);
  });

  it('should have a dancerStep function that inherits from Dancer', function() {
    expect(personDancer.dancerStep).to.equal(Dancer.prototype.step);
  });

  it('should render a node with a class of `person`', function() {
    expect(personDancer._$node.hasClass('person')).to.be.true;
  });

  it('should have a gender', function() {
    expect(['male', 'female']).to.include(personDancer._gender);
  });
});
