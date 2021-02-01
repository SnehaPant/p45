class Power{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        World.add(world,this.body)
        this.image=loadImage("power(2).png")
      
    }
    display(){

    }

}
    
