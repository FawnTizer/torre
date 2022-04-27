class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("./assets/canon.png");
    this.cannon_base = loadImage("./assets/cannonBase.png");
  }
  display(){
    push();
  rectMode(CENTER);
  image(this.cannon_image,120,70,this.width,this.height);
  pop();
  //rect(70,20,200,200);
  image(this.cannon_base,70,20,200,200)
  noFill();
  }
}
