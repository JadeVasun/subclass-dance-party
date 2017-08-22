var blinkingToiletDancer = function(top, left, timeBetweenSteps) {
  toiletDancer.call(this, top, left, timeBetweenSteps)
};


blinkingToiletDancer.prototype = Object.create (toiletDancer.prototype);
blinkingToiletDancer.prototype.constructor = blinkingToiletDancer;
blinkingToiletDancer.prototype.step = function () {
  toiletDancer.prototype.step.call(this);
  this.$node.toggle();
}
