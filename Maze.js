class Maze{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Sprites/hedge.jpg")
       
        World.add(world,this.body);
    
 
}
display(){
    imageMode(CENTER)
    image(this.image, this.body.position.x,this.body.position.y,this.width, this.height);
}
}