
function setup()
{
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
}

function draw()
{
image(video,0,0,400,400);
circle(50,50,90);
circle(340,350,90);
circle(50,350,90);
circle(350,50,90);
}
