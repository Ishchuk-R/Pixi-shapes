import {Shape} from './shape';

export class Rectangle extends Shape {
  constructor(x, y, width, height){
    super(x, y);
    this.y = y ? y : -height/2;
    this.heigth = height;
    this.type = 'rectangle';
    this.drawRect(0 - width/2, 0 - height/2, width, height);
    this.area = Math.round(this.width * this.height); 
    this.endFill(); 
  }
}