$(document).ready(function() {
  window.dancers = [];

  $('body').on('click', '.person', function(e) {
    e.preventDefault();
    var node = this;
    window.dancers.forEach(function(dancer) {
      if (dancer._node === node) {
        dancer.drink(20);
      }
    });
  });

  $('.drinkButton').on('click', function(event) {
    event.preventDefault();
    window.dancers.forEach(function(dancer) {
      if (dancer._type === 'person' && dancer._gender === 'female') {
        dancer.drink($(this).data('alcohol'));
      }
    }.bind(this));
  });

  $('.lineUpButton').on('click', function() {
    event.preventDefault();
    var top = $('body').height();
    var gap = ($('body').width() - 200) / window.dancers.length;

    window.dancers.forEach(function(dancer, i) {
      dancer.setPosition(top - dancer._$node.height(), gap * i);
    });

  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      30 + ($('body').height() - 280) * Math.random(),
      ($('body').width() - 200) * Math.random(),
      500 + Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer._$node);
  });
});
