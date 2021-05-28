var Img,Img1,Img2,Img3,Img4,Img5,BgImg;

function preload()
{
	Img=loadImage("Rajanyya.png")
  Img1=loadImage("Ritoja.png")
  Img2=loadImage("Anvita.png")
  Img3=loadImage("Maanvi.png")
  Img4=loadImage("Diya.png")
  Img5=loadImage("Mihika.png")
  BgImg=loadImage("Bg.jpg")
  
}

function setup() {
  createCanvas(3000,700)
  background(BgImg);

	var Rajanyya=createSprite(250,350,50,100)
Rajanyya.addImage(Img)
Rajanyya.scale=0.25


var Ritoja=createSprite(750,350,50,100)
Ritoja.addImage(Img1)
Ritoja.scale=0.25


var Anvita=createSprite(1250,350,50,100)
Anvita.addImage(Img2)
Anvita.scale=0.25


var Maanvi=createSprite(1750,350,50,100)
Maanvi.addImage(Img3)
Maanvi.scale=0.25


var Diya=createSprite(2250,350,50,100)
Diya.addImage(Img4)
Diya.scale=0.25

var Mihika=createSprite(2750,350,50,100)
Mihika.addImage(Img5)
Mihika.scale=0.25


}


function draw() {
 


drawSprites();
}