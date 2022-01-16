

class launcher{
    constructor(body,anchor){
        var options={bodyA:body,
        pointB:anchor,
        stiffness:0.004,
        lenght:1}
this.bodyA=body
this.bodyB=anchor
this.launcher=Constraint.create(options)
World.add(world,this.launcher)
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.bodyB
            strokeWeight(2)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    attach(body){
        this.launcher.bodyA=body
    }
    fly(){
        this.launcher.bodyA=null
    }
}