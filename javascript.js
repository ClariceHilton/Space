// https://stackoverflow.com/questions/6647314/how-can-i-find-distance-traveled-with-a-gyroscope-and-accelerometer
// https://stackoverflow.com/questions/5214197/simple-iphone-motion-detect/5220796#5220796
//https://stackoverflow.com/questions/20745066/how-to-compare-accelerometer-values-in-ios-and-android
//https://answers.unity.com/questions/225773/accelerometer-axis-differences-on-android-and-ios.html
//https://github.com/intel/generic-sensor-demos
//https://github.com/dorukeker/gyronorm-element
//https://stackoverflow.com/questions/4449565/getting-displacement-from-accelerometer-data-with-core-motion/4635095#4635095
//https://stackoverflow.com/questions/12926459/calculating-distance-using-linear-acceleration-android
//https://stackoverflow.com/questions/6647314/how-can-i-find-distance-traveled-with-a-gyroscope-and-accelerometer?noredirect=1&lq=1
//https://blog.contus.com/how-to-measure-acceleration-in-smartphones-using-accelerometer/
var ball = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');
var output2 = document.querySelector('.output2');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;
var dx=0;
var vx=0;
var vy=0;
var vz=0;


function handleOrientation(event) {

  var p = event.absolute;
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]
  var z = event.alpha;
  var webkit = event.webkitCompassHeading;
  var accuracy = event.webkitCompassAccuracy;
  var mag = event.magnetometer


  /*output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";
  output.innerHTML += "alpha: " + z + "\n";
  output.innerHTML += "absolute: " + p + "\n";
  output.innerHTML += "webkit: " + webkit + "\n";
  output.innerHTML += "accuracy: " + accuracy + "\n";*/


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

  output.innerHTML  = "x : " + x + "\n";
  output.innerHTML += "y: " + y + "\n";
  output.innerHTML += "z: " + z + "\n";

  if (x > 0.2 || x < -0.2){
    vx=vx+x*0.001;
  }
if (x>0.2 && x>-0.2) {
  vx = 0;
}

  if (vx > 0.1||vx<-0.1){
    console.log('yes2');
  }

   vy=vy+y/10;
   vz=vz+z/1000;
   output2.innerHTML  = "x: \n";
   output2.innerHTML  = "x: \n";
   output2.innerHTML  = "x: " + vx + "\n";
   /*output2.innerHTML  = "y: " + vy + "\n";
   output2.innerHTML  = "z: " + vz + "\n";*/


  /*if (z>1.2) {
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

  navigator.geolocation.getCurrentPosition(function(location) {
    var p = location.coords.latitude;
    var q = location.coords.longitude;
    console.log('lat: '+ p + " long: " +q );

    output2.innerHTML  = "location accuracy: " + location.coords.accuracy + "\n";
    output2.innerHTML  = "location lat: " + p + "\n";
    output2.innerHTML  = "location long: " + q + "\n";

  });
  output2.innerHTML  = "acceleration x: " + x + "\n";
  output2.innerHTML  = "acceleration y: " + y + "\n";
  output2.innerHTML  = "acceleration z: " + z + "\n";
  output2.innerHTML  = "acceleration x: " + x + "\n";
  output2.innerHTML  = "acceleration y: " + y + "\n";
  output2.innerHTML += "accelerationIncludingGravity: " + n + "\n";
  output2.innerHTML += "rotationRatealpha: " + a + "\n";
  output2.innerHTML += "rotationRatebeta: " + b + "\n";
  output2.innerHTML += "rotationRategamma: " + g + "\n";
  output2.innerHTML += "interval: " + p + "\n";*/


}


window.addEventListener("devicemotion", handleMotion, true);
window.addEventListener('deviceorientation', handleOrientation);


//var successBool = window.navigator.vibrate(pattern);
