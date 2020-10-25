class stone{
    constructor(x,y){
      this.rock = loadImage("stone.png");
      var property={
          
          restitution:0.5,
          density:0.4
      }
      this.ore = Bodies.circle(x,y,10,property);

      World.add(world,this.ore);
    }
    create(){
        var pos = this.ore.position;
        var angle = this.ore.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.rock,0,0,30,30);
        pop();
    }
}