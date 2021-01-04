class Stone{
    constructor(bodyA,pointB){

    
   var options={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    length: 10,
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    
}

      this.image=loadImage("stone.png")
      this.pointB = pointB
      this.body = Constraint.create(options);
    World.add(world,this.body);
}
fly(){
  this.body.bodyA = null;
}
display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,170,470, this.width, this.height);
    if(this.body.bodyA){
      var pointA = this.body.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  }
}
