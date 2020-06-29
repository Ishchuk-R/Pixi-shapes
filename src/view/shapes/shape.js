import {getRandomColor} from '../helpers';
import * as PIXI from 'pixi.js';

export class Shape extends PIXI.Graphics {
  constructor(x, y){
    super();
    this.beginFill(getRandomColor());
    this.tint = getRandomColor();
    this.heigth = 100;
    this.x = x;
    this.y = y ? y: -100;
    this.interactive = true; 
    this.buttonMode = true; 
  }
  calculateArea(){}
}