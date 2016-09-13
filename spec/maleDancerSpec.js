describe('MaleDancer', function() {
  var maleDancer;
  beforeEach(function() {
    maleDancer = makeMaleDancer(10, 10, 100);
  });

  it('should be an instance of PersonDancer', function() {
    expect(maleDancer).to.be.an.instanceof(PersonDancer);
  });

  it('should be have MaleDancer as a constructor', function() {
    expect(maleDancer.constructor).to.equal(MaleDancer);
  });

  it('should have a gender of male', function() {
    expect(maleDancer._gender).to.equal('male');
  });

  it('should have a type of person', function() {
    expect(maleDancer._type).to.equal('person');
  });

  it('should have a method named drink', function() {
    sinon.spy(maleDancer, 'drink');
    expect(maleDancer.drink).to.be.a('function');
    maleDancer.drink(2);
    expect(maleDancer.drink.called).to.be.true;
  });

  it('should get more intoxicated after drinking', function() {
    expect(maleDancer._intoxicationLevel).to.equal(0);
    maleDancer.drink(20);
    expect(maleDancer._intoxicationLevel).to.be.above(0);
  });

  it('should render a node with a class of `person` and `male`', function() {
    expect(maleDancer._$node.hasClass('person')).to.be.true;
    expect(maleDancer._$node.hasClass('male')).to.be.true;
  });
});
