import {Shape} from './shape';

export class Elipse extends Shape {
  constructor(x, y, width, height){
    super(x, y);
    this.y = y ? y : -height/2;
    this.heigth = height;
    this.type = 'elipse';
    this.drawEllipse(0, 0, width, height);
    this.area = Math.round(Math.PI *this.width/2 * this.height/2);
    this.endFill(); 
  }
}