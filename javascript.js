var ball = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');
var output2 = document.querySelector('.output2');

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



  var x = event.acceleration.x;
  var y = event.acceleration.y;
  var z = event.acceleration.z;
  var n = event.accelerationIncludingGravity;
  var a = event.rotationRate.alpha;
  var b = event.rotationRate.beta;
  var g = event.rotationRate.gamma;
  var p = event.interval;

  if (z>1.2) {
    document.body.style.backgroundColor = "white";
  }
  if (z>0.8 && z<1.2) {
    document.body.style.backgroundColor = "yellow";
  }
  if (z>0.2 && z<0.8) {
    document.body.style.backgroundColor = "green";
  }
  if (z>-0.4 && z<0.5) {
    document.body.style.backgroundColor = "blue";
  }
  if (z>-1.2 && z<-0.4){
    document.body.style.backgroundColor = "magenta";
  }
  if (z>-0.4 && z<-1) {
    document.body.style.backgroundColor = "cyan";
  }
  if (z<-1) {
    document.body.style.backgroundColor = "grey";
  }


  output2.innerHTML  = "acceleration x: " + x + "\n";
  output2.innerHTML  = "acceleration y: " + y + "\n";
  output2.innerHTML  = "acceleration z: " + z + "\n";
  output2.innerHTML  = "acceleration x: " + x + "\n";
  output2.innerHTML  = "acceleration y: " + y + "\n";
  output2.innerHTML += "accelerationIncludingGravity: " + n + "\n";
  output2.innerHTML += "rotationRatealpha: " + a + "\n";
  output2.innerHTML += "rotationRatebeta: " + b + "\n";
  output2.innerHTML += "rotationRategamma: " + g + "\n";
  output2.innerHTML += "interval: " + p + "\n";


}

let sensor = new Magnetometer();
sensor.start();

sensor.onreading = () => {
    console.log("Magnetic field along the X-axis " + sensor.x);
    console.log("Magnetic field along the Y-axis " + sensor.y);
    console.log("Magnetic field along the Z-axis " + sensor.z);
};

sensor.onerror = event => console.log(event.error.name, event.error.message);


window.addEventListener("devicemotion", handleMotion, true);
window.addEventListener('deviceorientation', handleOrientation);

//var successBool = window.navigator.vibrate(pattern);
