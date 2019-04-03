//battery
navigator.getBattery().then(function(battery) {

    var level = battery.level;
    if (level <= 0.35){
         document.getElementById("battery").innerHTML = level * 100 + "%" ;
    } else if (level > 0.35 && level <= 0.60) {
      document.getElementById("battery").innerHTML = level * 100 + "%" ;
    } else if (level > 0.65) {
      document.getElementById("battery").innerHTML = level * 100 + "%"  ;
    }

});

// get mobile type
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
var mobile = getMobileOperatingSystem();
if (mobile == "Windows Phone") {
  console.log("1" + mobile);
  document.getElementById("OS").innerHTML = "Does its ease of your Windows customisation spark joy?";
} else if (mobile == "Android"){
  console.log("2" + mobile);
  document.getElementById("OS").innerHTML = "Does its ease of your Android customisation spark joy?";
} else if (mobile == "iOS"){
  console.log("3" + mobile);
  document.getElementById("OS").innerHTML = "Does its ease of your iPhone customisation spark joy?";
} else {
  console.log("4" + mobile);
  document.getElementById("OS").innerHTML = "Does its ease of its customisation spark joy?";
}

//get browser


//find x y z orientation coordinates
function handleOrientation(event) {

  var p = event.absolute;
  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]
  var z = event.alpha;
  var webkit = event.webkitCompassHeading;
  var accuracy = event.webkitCompassAccuracy;
  var mag = event.magnetometer

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
  /*ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";*/
globals.gx = x;
globals.gy = y;
  //console.log('here: ' + x + " " + y);
}
//variables for understanding acceleration
var dx=0;
var pvx;
var vx=0;
var vy=0;
var vz=0;
//stores what device is connected
var device;

//function for what device is connected
if( /Android/i.test(navigator.userAgent) ) {
  device = "Android";

} else if (/iPhone|iPad|iPod/i.test) {
  device = "IOS";

} else {
  device = "unknown";
}

//device stores
function handleMotion(event) {

  var x = event.acceleration.x;
  var y = event.acceleration.y;
  var z = event.acceleration.z;
  var n = event.accelerationIncludingGravity;
  var a = event.rotationRate.alpha;
  var b = event.rotationRate.beta;
  var g = event.rotationRate.gamma;
  var p = event.interval;


  if (x > 0.2 || x < -0.3){
    pvx = vx;
    vx=vx+x*0.001;
  }
  if (x < 0.01 && x > -0.01){

    vx=0;
  }

  if (y > 0.5 || y < -0.5){
    vy=vy+y*0.001;
  }
  if (y<0.5 && y> -0.5) {
  vy = 0;
  }



   globals.gvx = vx;
   globals.gvy = vy;
   //console.log("x: " + vx + "y: " + vy);




}
