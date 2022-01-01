function draw_computer() {

  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    var context=canvas.getContext('2d');
    var i=0;
    var speed=50;
    var txt="Welcome"

    context.fillRect(0,30,500,300);
    context.clearRect(10,37,480,280);

  	context.font = "60px Comic Sans MS";
  	context.fillStyle = "red";
  	context.textAlign = "center";
  	context.fillText("Welcome", 250, 150);

  	context.fillStyle = "black";
  	context.fillRect(250,330,20,40);
  	context.fillRect(100,370,320,20);
  }

}