import * as PIXI from 'pixi.js'
import {random} from './helpers';
import {Circle} from './shapes/circle';
import {Rectangle} from './shapes/rectangle';
import {Elipse} from './shapes/elipse';
import {Triangle} from './shapes/triangle';
import {Side5shape} from './shapes/sides5shape';
import {Side6shape} from './shapes/sides6shape';



export const newShape = (number, x = random(0, 800), y) => {
  const minWidth = 25,
        maxWidth = 100,
        minHeight = 25, 
        maxHeight = 100;

  const side5Point = [
        random(maxWidth / 3, maxWidth * 2 / 3), 
        random(0, maxHeight / 3),
        random(maxWidth * 2 / 3, maxWidth), 
        random(maxHeight / 3, maxHeight * 2 / 3),
        random(maxWidth / 2, maxWidth), 
        random(maxHeight * 2 / 3, maxHeight),
        random(0, maxWidth/2), 
        random(maxHeight * 2 / 3, maxHeight),
        random(0, maxWidth / 3), 
        random(maxHeight / 3, maxHeight * 2 / 3)
  ];

  const side6Point = [
    random(maxWidth / 4, maxWidth / 2),
    random(0, maxHeight/ 3),
    random(maxWidth / 2, maxWidth * 3 / 4), 
    random(0, maxHeight / 3),
    random(maxWidth * 3 / 4, maxWidth),
    random(maxHeight / 3, maxHeight * 2 / 3),
    random(maxWidth/2, maxWidth *3/4),
    random(maxHeight * 2 / 3, maxHeight),
    random(maxWidth / 4, maxWidth / 2), 
    random(maxHeight *2/ 3, maxHeight),
    random(0, maxWidth / 3), 
    random(maxHeight / 3, maxHeight *2 /3),
  ];

  const typeShape = ['circle', 'rect', 'elipse', 'triangle', 'sides5', 'sides6'];
  const type = typeShape[number];
 
  const randomWidth = random(minWidth, maxWidth);
  const randomHeight = random(minHeight, maxHeight); 

  const graphics = new PIXI.Graphics();
    graphics.clear()
    switch (type){
    case 'circle':
      return new Circle(x, y, randomWidth);
    case 'rect':
      return new Rectangle(x, y, randomWidth, randomHeight); 
    case 'elipse':
      return new Elipse(x, y, randomWidth, randomHeight); 
    case 'triangle':
      return new Triangle(x, y, randomWidth, randomHeight);
    case 'sides5':
      return new Side5shape(x, y, side5Point);  
    case 'sides6':
      return new Side6shape(x, y, side6Point);  
    default: 
      return new Circle(x, y, randomWidth);
    }
  }


