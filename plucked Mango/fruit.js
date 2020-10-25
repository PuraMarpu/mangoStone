class mango{
    constructor(x,y){
        this.fruit = loadImage("mango.png");
        var option={
            isStatic:true,
            restitution:0.5,
            friction:0.4
        }
        this.juice = Bodies.circle(x,y,10,option);
        World.add(world,this.juice);
    }
    grow(){
        var hang = this.juice.position;

        push();
        translate(hang.x,hang.y);
        imageMode(CENTER);
        image(this.fruit,0,0,30,30);
        pop();
    }
}
