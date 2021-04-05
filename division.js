class Divisions {
    constructor(x,y,width,height){
var option={
    isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height=height;
World.add(world,this.body);

    }

    display(){
var pos=this.body.position
rectMode(CENTER);
fill(154,51,185)
rect(pos.x,pos.y,this.width,this.height)
}
}