var PersonDancer = function PersonDancer(top, left, timeBetweenSteps, gender) {
  Dancer.call(this, top, left, timeBetweenSteps);
  gender = gender && gender.toLowerCase();
  this.gender = (gender === 'male' || gender === 'female') ? gender :
    Math.floor(Math.random() * 2) === 1 ? 'male' : 'female';
  this.type = 'person';
  this.$node.addClass(`person ${this.gender}`);
};

PersonDancer.prototype = Object.create(Dancer.prototype);
PersonDancer.prototype.constructor = PersonDancer;

PersonDancer.prototype.setGender = function (gender) {
  switch (gender.toLowerCase()) {
  case 'male':
  case 'female': this.gender = gender.toLowerCase();
  }
};

var makePersonDancer = function(top, left, timeBetweenSteps) {
  return new PersonDancer(top, left, timeBetweenSteps);
};
