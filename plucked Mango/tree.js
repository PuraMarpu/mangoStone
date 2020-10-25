class tree{
    constructor(){
        this.root = loadImage("tree.png");
        var op={
            isStatic:true,
        }
        this.tree = Bodies.rectangle(600,300,600,300,op);
        World.add(world,this.tree);
    }
    grow(){
        var pos = this.tree.position;

        imageMode(CENTER);
        translate(pos.x,pos.y);
        
        image(this.root,pos.x,pos.y,600,300);
    }
}