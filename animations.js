// Only executed our code once the DOM is ready.

if (swiper.realIndex == 1) {
    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    var myPath = new paper.Path();
    myPath.strokeColor = 'black';

    // Draw the view now:
    paper.view.draw();

    var tool = new paper.Tool();

    /*tool.onMouseDown = function(event) {
      console.log("here");
        myPath.add(event.point);
    }*/

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
      //if (x >  90) { x =  90};
      //if (x < -90) { x = -90};

      // To make computation easier we shift the range of
      // x and y to [0,180]
      x += 90;
      y += 90;

      // 10 is half the size of the ball
      // It center the positioning point to the center of the ball
      /*ball.style.top  = (maxX*x/180 - 10) + "px";
      ball.style.left = (maxY*y/180 - 10) + "px";*/
      myPath.add(x, y);
      console.log('here: ' + x + " " + y);
    }
    window.addEventListener('deviceorientation', handleOrientation);

}
