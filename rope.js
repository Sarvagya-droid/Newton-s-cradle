class Rope{
    constructor(bodyA, pointB, offsetX, offsetY){
        this.offset = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            printB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = pointB;
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
