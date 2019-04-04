paper.install(window);


    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);

    var myPath = new paper.Path();
    myPath.strokeColor = 'black';

    // Draw the view now:
    paper.view.draw();

    /*var tool = new paper.Tool();

    tool.onMouseDown = function(event) {
      console.log("here");
        myPath.add(event.point);
    }*/


    view.onFrame = function(event) {

			//times global by
			myPath.add(globals.gx*6, globals.gz*6);

      if (swiper.realIndex > 18){
        var JSON = paper.project.exportJSON();
        console.log(JSON);
        paper.project.remove();

      }
		}
