var RainbowPoop = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps) 
  
  this.$node = $('<span id="toilet" class="dancer"><img class="poop"src="https://res.cloudinary.com/mp-assets/image/upload/f_auto/v1441808725/iscream/0001384_rainbow-poop-emoji-microbead-pillow.png"/></span>');
  this.$node.css('top', top + 'px')
  this.$node.css('left', left + 'px')
};


RainbowPoop.prototype = Object.create (Dancer.prototype);
RainbowPoop.prototype.constructor = RainbowPoop;
RainbowPoop.prototype.step = function () {
  
  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: '700px',
    top: '360px',
    height: '150px',
    width: '150px'
  });
}
