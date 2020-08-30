//Create variables here
var dog1;
var happydogimage;
var database;
var foodS
var foodStock
var dogimage
function preload()
{
  //load images here
  dogimage=loadImage("images/dogImg.png");
  happydogimage=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog1=new dog(200,200,70,70);
  dog1.addImage(dogimage)
}


function draw() {
  background(46, 139, 87)  
  dog1.display();
  drawSprites();
  //add styles here
foodStock=database.ref('Food');
foodStock.on("value",readStock);

if(keyWentDown){
  writeStock(foodS);
  dog1.addImage(happydogimage);
}
textSize("20");
Fill ("red")
text("Press UP_ArrowKey for feeding milk ")
function readStock(data){
  foodS=data.val();

  function writeStock(X){
    database.ref('/').update({
      Food:x
    })
  }
}

}



