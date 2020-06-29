import {Shape} from './shape';

export class Triangle extends Shape {
  constructor(x, y, randomWidth, randomHeight){
    super(x, y);
    this.randomWidth = randomWidth;
    this.randomHeight = randomHeight;
    this.y = y ? y : - randomHeight;
    this.type = 'triangle';
    this.side3Point = [
      0, -randomHeight/2, -randomWidth, randomHeight, randomWidth/2, randomHeight/2
    ];
    this.drawPolygon(this.side3Point);
    this.area = Math.round(1/2*this.randomWidth*this.randomHeight*Math.sin(this.randomWidth/this.randomHeight));
    this.endFill(); 
  }
}