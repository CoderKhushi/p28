class Boy{
    constructor(x,y,width,height){

    
   var options={
    isStatic:true,
    restitution:0,
    density:1.0
}
this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("boy.png")
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,200,510, this.width, this.height);
  }
}