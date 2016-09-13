var MaleDancer = function(top, left, timeBetweenSteps, variant) {
  PersonDancer.call(this, top, left, timeBetweenSteps, 'male');
  // Males generally have a higher tolerance to alcohol
  this._variant = variant;
  this._tolerance *= 0.75;
  this._$node.addClass(this._variant);
};

MaleDancer.prototype = Object.create(PersonDancer.prototype);
MaleDancer.prototype.constructor = MaleDancer;

var makeMaleDancer = function(top, left, timeBetweenSteps) {
  var variant = Math.floor(Math.random() * 2) === 1 ? 'one' : 'two';
  return new MaleDancer(top, left, timeBetweenSteps, variant);
};
