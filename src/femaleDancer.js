var FemaleDancer = function(top, left, timeBetweenSteps, variant) {
  PersonDancer.call(this, top, left, timeBetweenSteps, 'female');
  // Females generally have a lower tolerance to alcohol

  this._variant = variant;
  this._tolerance *= 1.25;
  this._$node.addClass(this._variant);

};

FemaleDancer.prototype = Object.create(PersonDancer.prototype);
FemaleDancer.prototype.constructor = FemaleDancer;

var makeFemaleDancer = function(top, left, timeBetweenSteps) {
  var variant = Math.floor(Math.random() * 2) === 1 ? 'one' : 'two';
  return new FemaleDancer(top, left, timeBetweenSteps, variant);
};
