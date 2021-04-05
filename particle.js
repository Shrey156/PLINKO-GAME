class Particles {
    constructor(x,y,r){
var option={
    restitution:0.4
}

this.body=Bodies.circle(x,y,5,option);
this.r = r;
this.color = color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body);

    }

display(){
var pos=this.body.position
var angle = this.body.angle

push();
translate(pos.x , pos.y);
rotate(angle);
ellipseMode(CENTER);
fill(this.color);
ellipse(0,0,15,15);
pop();
}
}