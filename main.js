var canvas= new fabric.Canvas("myCanvas");

ballX=0;
ballY=0;
holeX=400;
holeY=800;
var g_obj=" ";
var h_obj=" ";
block_width= 5;
block_height= 5;

function load_img(){
		fabric.Image.fromURL("golf-h.png",function(Img){
	
			g_obj=Img;
			g_obj.scaleToWidth(50);
			g_obj.scaleToHeight(50);
			g_obj.set({
				top: holeY,
				left: holeX,
			});
			canvas.add(g_obj);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){

        h_obj=Img;
        h_obj.scaleToWidth(50);
        h_obj.scaleToHeight(50);
        h_obj.set({
            top: ballY,
            left: ballX,

        });
        canvas.add(h_obj);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(g_obj);
		document.getElementById("hd3").innerHTML="GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY>=0){
			ballY= ballY-HoleY;
			console.log("When up arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(g_obj);
			load_img();
		}
	}

	function down()
	{
		if(ballY<=450){
			ballY= ballY+HoleY;
			console.log("When down arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(g_obj);
			load_img();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX= ballY-HoleY;
			console.log("When left arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(g_obj);
			load_img();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX= ballY-HoleY;
			console.log("When right arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(g_obj);
			load_img();
		}
	}
	
}

