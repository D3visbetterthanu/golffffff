var canvas= new fabric.Canvas("myCanvas");

ballX=0;
ballY=0;
HoleX=800;
HoleY=400;
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
				top: HoleY,
				left: HoleX,
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
	if((ballX==HoleX)&&(ballY==HoleY)){
		canvas.remove(h_obj);
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
		if(ballY>=5){
			ballY= ballY-block_height;
			console.log("When up arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(h_obj);
			new_image();
		}
	}

	function down()
	{
		if(ballY<=450){
			ballY= ballY+block_height;
			console.log("When down arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(h_obj);
			new_image();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX= ballX-block_width;
			console.log("When left arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(h_obj);
			new_image();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX= ballX+block_width;
			console.log("When right arrow is pressed x="+ballX+" y=" +ballY);
			canvas.remove(h_obj);
			new_image();
		}
	}
	
}

