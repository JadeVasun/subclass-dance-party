var toiletDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><img class="poop"src="https://www.emojibase.com/resources/img/emojis/apple/x1f6bd.png.pagespeed.ic.-HFYhYABns.png"/></span>');
  this.step();
  this.setPosition(top,left)
}

toiletDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

toiletDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};