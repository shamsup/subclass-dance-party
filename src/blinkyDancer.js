var BlinkyDancer = function BlinkyDancer(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this._$node.addClass('blinky');
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// Save a reference to the superclass' step function so we can use it later
BlinkyDancer.prototype._oldStep = BlinkyDancer.prototype.step;

// Redefine our own step function that calls the super
BlinkyDancer.prototype.step = function () {
  this._oldStep();
  this._$node.toggle();
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  return new BlinkyDancer(top, left, timeBetweenSteps);
};
