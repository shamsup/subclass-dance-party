// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this._timeBetweenSteps = timeBetweenSteps;
  this._$node = $('<span class="dancer"></span>');
  this._node = this._$node[0];
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function setPosition(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
  };
  this._$node.css(styleSettings);
};

var makeDancer = function makeDancer(top, left, timeBetweenSteps) {
  return new Dancer(top, left, timeBetweenSteps);
};
