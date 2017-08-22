var rainbowPoopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps) 
  
  this.$node = $('<span id="toilet" class="dancer"><img class="poop"src="https://res.cloudinary.com/mp-assets/image/upload/f_auto/v1441808725/iscream/0001384_rainbow-poop-emoji-microbead-pillow.png"/></span>');
  this.$node.css('top', top + 'px')
  this.$node.css('left', left + 'px')
};


rainbowPoopDancer.prototype = Object.create (makeDancer.prototype);
rainbowPoopDancer.prototype.constructor = rainbowPoopDancer;
rainbowPoopDancer.prototype.step = function () {
  
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '700px',
    top: '360px',
    height: '150px',
    width: '150px'
  });
}
