describe('FemaleDancer', function() {
  var femaleDancer;
  beforeEach(function() {
    femaleDancer = makeFemaleDancer(10, 10, 100);
  });

  it('should be an instance of PersonDancer', function() {
    expect(femaleDancer).to.be.an.instanceof(PersonDancer);
  });

  it('should be have FemaleDancer as a constructor', function() {
    expect(femaleDancer.constructor).to.equal(FemaleDancer);
  });

  it('should have a gender of female', function() {
    expect(femaleDancer._gender).to.equal('female');
  });

  it('should have a type of person', function() {
    expect(femaleDancer._type).to.equal('person');
  });

  it('should have a method named drink', function() {
    sinon.spy(femaleDancer, 'drink');
    expect(femaleDancer.drink).to.be.a('function');
    femaleDancer.drink(2);
    expect(femaleDancer.drink.called).to.be.true;
  });

  it('should get more intoxicated after drinking', function() {
    expect(femaleDancer._intoxicationLevel).to.equal(0);
    femaleDancer.drink(20);
    expect(femaleDancer._intoxicationLevel).to.be.above(0);
  });

  it('should render a node with a class of `person` and `female`', function() {
    expect(femaleDancer._$node.hasClass('person')).to.be.true;
    expect(femaleDancer._$node.hasClass('female')).to.be.true;
  });
});
