class sling{
    constructor(bodyA,pointB){
        var op={
          bodyA:bodyA,
          pointB:pointB,
          length:80,
          stiffness:0.03
      }
      this.rope = bind.create(op);
      this.pointB = pointB;
  
      World.add(world,this.rope);
    }
    detach(){
      this.rope.bodyA = null;
    }
  }