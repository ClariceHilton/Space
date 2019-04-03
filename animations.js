paper.install(window);

swiper.on('slideChange', function() {
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


    view.onFrame = function(event) {

			// On each frame, rotate the path by 3 degrees:
			myPath.add(globals.gx*5, globals.gy*5);
      if (swiper.realIndex > 1){
        var JSON = paper.project.exportJSON();
        console.log(JSON);
        paper.project.remove();

      }
		}

  }
});
