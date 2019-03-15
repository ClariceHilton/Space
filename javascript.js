var ball = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {

  var p = event.absolute;
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]
  var z = event.alpha;
  var webkit = event.webkitCompassHeading;
  var accuracy = event.webkitCompassAccuracy;


  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
  output.innerHTML += "alpha: " + z + "\n";
  output.innerHTML += "absolute: " + p + "\n";
  output.innerHTML += "webkit: " + webkit + "\n";
  output.innerHTML += "accuracy: " + accuracy + "\n";


  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";
}


function handleMotion(event) {

  console.log("hello");
  var m = event.acceleration;
  var n = event.accelerationIncludingGravity;  // In degree in the range [-180,180]
  var o = event.rotationRate; // In degree in the range [-90,90]
  var p = event.interval;
  console.log("acceleration : " + m);

  output.innerHTML  = "acceleration : " + m + "\n";
  output.innerHTML += "accelerationIncludingGravity: " + n + "\n";
  output.innerHTML += "rotationRate: " + o + "\n";
  output.innerHTML += "interval: " + p + "\n";


}
window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});
//window.addEventListener("devicemotion", handleMotion, true);
window.addEventListener('deviceorientation', handleOrientation);
