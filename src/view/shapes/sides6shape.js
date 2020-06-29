import {Shape} from './shape';
import {polygonArea} from '../helpers';

export class Side6shape extends Shape {
  constructor(x, y, point){
    super(x, y);
    this.type= 'side6shape';
    this.drawPolygon(point);
    this.area = polygonArea(point);
    this.endFill(); 
  }
}