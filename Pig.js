class Pig extends BaseClass{
    constructor(x, y) {
       super(x,y,50,50)
       this.image=loadImage("sprites/enemy.png");
       this.show= 255;
       }
       display(){
           //console.log(this.body.speed);
           if(this.body.speed < 3){
           super.display();
       }
       else{
         World .remove(world, this.body);
          push();
         this.show= this.show-5;
          tint(255, this.show)
          image (this.image,this.body.position.x,this.body.position.y,50,50)
          pop();
       }
      }
      score(){
        if (this.show < 0 && this.show > -1005){
          score++;
        }
      }
    }