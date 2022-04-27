class Bala {
    constructor(x, y ) {
     var options = {
      restitution: 0.8,
       friction: 1.0,
        density: 1.0,
         isStatic : true

     };
      this.r=30;
      this.body = Bodies.circle(x,y,this.r,options);
      this.image=loadImage ("./assets/cannonball.png");
      World.add(world, this.body);
    }
    display(){
     var pos =this.body.position;
      push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
    
    
    }
}
  