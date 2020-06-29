import * as PIXI from 'pixi.js';

export class PixiShapesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  startGame(){
    this.view.createScene();
    this.playGame();


    /*Сreate container for click */
    const container = new PIXI.Container();
    container.hitArea = new PIXI.Rectangle(0, 0, this.model.pixiSceneWidth, this.model.pixiSceneHeight);
    container.interactive = true;
    this.model.pixiScene.stage.addChild(container);

    /*position relative to the figure */
     const posiitonApp = this.model.app.getBoundingClientRect();

   
    container.on('click', (e) => {
      /*determine the coordinates of the center of the random figure*/
      const centerX = e.data.originalEvent.clientX - posiitonApp.x;
      const centerY = e.data.originalEvent.clientY - posiitonApp.y;
      const randomShape = this.view.createRandomShape(centerX, centerY);
      this.model.countShapes++;
      this.model.areaShapes += randomShape.area;
      this.view.showInfoShape();
      this.model.shapes.push(randomShape);
      console.log(randomShape)
      this.model.pixiScene.stage.addChild(randomShape);
      /*Delete random shape click */
      randomShape.on('click', (e) => { 
        e.stopPropagation();
        this.view.removeShape(randomShape);
        this.view.changeColor(randomShape);
      });
    });

    /*Change gravity value  */
    this.model.gravityButton.addEventListener('click', (e) => {
      this.model.gravity = +e.target.value;

    });

    /*Change  generated shapes per sec value  */
    this.model.generatedButton.addEventListener('click', (e) => {
      this.model.generatedPerSec = +e.target.value;
    });
  }



  createGame(){
    for (let i = 0; i < this.model.generatedPerSec; i++){
      const shape = this.view.createShape();
      this.model.countShapes++;
      this.model.areaShapes += shape.area;
      this.view.showInfoShape();
      this.model.shapes.push(shape);
      this.model.pixiScene.stage.addChild(shape);
      shape.on('click', (e) => {
        e.stopPropagation();
        this.view.removeShape(shape);
        this.view.changeColor(shape);
      });
    }
  }

  playGame(){
    let i = 0;
    const step = () => {
      if (++i % this.model.interval == 0) this.createGame();
      requestAnimationFrame(step);
     }
     step();
    this.model.pixiScene.ticker.add(() => {
      this.model.shapes.map(s => {
        s.y += this.model.gravity;
        if (s.y >= this.model.pixiSceneHeight + s.heigth/2) {
          this.view.removeShape(s);
        }
      })
    })
  }
}
