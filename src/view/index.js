
import * as PIXI from 'pixi.js';

import {newShape} from './shapes';
import {random} from './helpers';

export class PixiShapesView {
  constructor(model){
    this.model = model;
  }

  createScene(){
    this.model.pixiScene = new PIXI.Application({
      width: this.model.pixiSceneWidth,
      height: this.model.pixiSceneHeight,
      backgroundColor: 0xC3C3C3,
      resolution: 1
    });
    this.model.app.appendChild(this.model.pixiScene.view);
  }

  createShape(){
   return newShape(random(0 , 6));
  }

  createRandomShape(x, y) {
    return newShape(random(0 , 4), x, y);

  }

  changeColor(shape) {
    for (let i = 0; i < this.model.shapes.length; i++) {
      if (shape.type == this.model.shapes[i].type) {
        this.model.shapes[i].tint = shape.tint;
      }
    }
  }

  removeShape(shape) {
    shape.clear();
    this.model.countShapes--;
    this.model.areaShapes -= shape.area;
    this.showInfoShape();
    const idx = this.model.shapes.indexOf(shape);
    if (idx > -1) {
      this.model.shapes.splice(idx, 1);
    }
  }

  showInfoShape(){
    this.model.counterBlock.innerHTML = this.model.countShapes;
    this.model.areaBlock.innerHTML = this.model.areaShapes + 'px^2';
  }
}