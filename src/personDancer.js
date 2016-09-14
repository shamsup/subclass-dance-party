var PersonDancer = function PersonDancer(top, left, timeBetweenSteps, gender) {
  Dancer.call(this, top, left, timeBetweenSteps);

  if (typeof gender === 'string' && (gender.toLowerCase() === 'male' || gender.toLowerCase() === 'female')) {
    this._gender = gender.toLowerCase();
  } else {
    this._gender = Math.floor(Math.random() * 2) === 1 ? 'male' : 'female';
  }
  this._type = 'person';
  this._tolerance = 0.75 + (Math.floor(100 * Math.random()) / 100 * 0.5);
  this._intoxicationLevel = 0; // max of 100
  this._sick = false;
  this._vomiting = false;
  this._$node.addClass(`person ${this._gender}`);
};

PersonDancer.prototype = Object.create(Dancer.prototype);
PersonDancer.prototype.constructor = PersonDancer;
PersonDancer.prototype.dancerStep = PersonDancer.prototype.step;

PersonDancer.prototype.step = function () {
  this.dancerStep();
  if (this._sick && Math.random() * 100 > 95) {
    this.vomit();
  }
};

PersonDancer.prototype.drink = function (amount) {
  if (!amount) {
    return;
  }
  if (this._sick) {
    this.vomit();
    return;
  }

  this._intoxicationLevel += Math.ceil(amount * this._tolerance);
  if (this._intoxicationLevel > 100) {
    this._intoxicationLevel = 100;
    this.getSick();
  }
  this.checkDrunkLevel();
};

PersonDancer.prototype.getSick = function () {
  this._sick = true;
  this._$node.addClass('sick');
};

PersonDancer.prototype.vomit = function () {
  if (this._vomiting) {
    return;
  }
  var context = this;
  this._vomiting = true;
  this._sick = false;
  this._intoxicationLevel = 0;

  var $vomit = $('<span class="vomit"></span>');
  this._$node.append($vomit);

  $vomit.animate({opacity: 1}, 500, function() {
    var collision = $vomit.offset();
    collision.right = collision.left + $vomit.width();
    collision.bottom = collision.top + $vomit.height();

    if (window && window.dancers) {
      window.dancers.forEach(function(dancer) {
        if (dancer._type === 'person' && dancer !== context) {
          var nodeOffset = dancer._$node.offset();
          nodeOffset.right = nodeOffset.left + dancer._$node.width();
          nodeOffset.bottom = nodeOffset.top + dancer._$node.height();
          if (((nodeOffset.left >= collision.left && nodeOffset.left <= collision.right)
              || (nodeOffset.right >= collision.left && nodeOffset.right <= collision.right)
              || (nodeOffset.right >= collision.right && nodeOffset.left <= collision.left))
            && ((nodeOffset.top >= collision.top && nodeOffset.top <= collision.bottom)
              || (nodeOffset.bottom >= collision.top && nodeOffset.bottom <= collision.bottom)
              || (nodeOffset.top <= collision.top && nodeOffset.bottom >= collision.bottom))
            ) {
            dancer.getSick();
            dancer.vomit();
          }
        }
      });
    }
    $vomit.animate({opacity: 1}, 500, function() {
      $vomit.fadeOut(200, function() {
        context._$node.removeClass('sick');
        $vomit.remove();
        context._sick = false;
        context._vomiting = false;
        context.checkDrunkLevel();
      });
    });
  });
};

PersonDancer.prototype.checkDrunkLevel = function() {
  var drunkLevel = Math.floor(this._intoxicationLevel / 20);
  if (!this._$node.hasClass(`drunk-level-${drunkLevel}`)) {
    this._$node.removeClass('drunk-level-0 drunk-level-1 drunk-level-2 drunk-level-3 drunk-level-4 drunk-level-5').addClass(`drunk-level-${drunkLevel}`);
  }
};

var makePersonDancer = function(top, left, timeBetweenSteps) {
  return new PersonDancer(top, left, timeBetweenSteps);
};
