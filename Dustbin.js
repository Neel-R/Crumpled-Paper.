class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rect(x, y,width,height, options);
        this.width = width;
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode = CENTER;
        pop(); 
    }
}