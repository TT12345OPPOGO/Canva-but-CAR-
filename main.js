canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_width= 75;
greencar_height= 100;

greencar_x = 5;
greencar_y = 225;

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage (background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage (greencar_imageTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			Down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			Left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			Right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
           {
    greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed,  x="+ greencar_x + " | y= " +greencar_y);
uploadBackground();
uploadgreencar();
           }
		}

function Down()
{
	if(greencar_y <=500)
	{
greencar_y = greencar_y + 10;
console.log("when down arrow is pressed,  x="+ greencar_x + " | y= " +greencar_y);
uploadBackground();
uploadgreencar();
	}
}

function Left()
{
	if(greencar_x >=0)
           {
    greencar_x = greencar_x - 10;
    console.log("when left arrow is pressed,  x="+ greencar_x + " | y= " +greencar_y);
uploadBackground();
uploadgreencar();
           }
}

function Right()
{
	if(greencar_x <= 700)
           {
    greencar_x = greencar_x + 10;
    console.log("when right arrow is pressed,  x="+ greencar_x + " | y= " +greencar_y);
uploadBackground();
uploadgreencar();
           }
}

