

function preload () {
    pl = loadImage("images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {

for (var x = 0;x <= 8;x++) {
 image(pl,50*x,45,50,50);

}
Text("breedte = "+pl.width,140,40);
}