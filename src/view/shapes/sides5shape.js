import {Shape} from './shape';
import {polygonArea} from '../helpers'

export class Side5shape extends Shape {
  constructor(x, y, point){
    super(x, y);
    this.type= 'side5shape';
    this.drawPolygon(point);
    this.area = polygonArea(point);
    this.endFill(); 
  }
}