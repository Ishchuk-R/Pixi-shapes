import {Shape} from './shape';

export class Circle extends Shape {
  constructor(x, y, radius){
    super(x, y);
    this.radius = radius;
    this.type = 'circle';
    this.y = y ? y : -radius;
    this.heigth = radius*2;
    this.drawCircle(0, 0, radius);
    this.area = Math.round(Math.PI * Math.pow(this.radius, 2));
    this.endFill(); 
  }
}