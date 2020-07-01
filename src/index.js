import './style.css'
import {PixiShapesController} from './controller'
import {PixiShapesModel} from './model'
import {PixiShapesView} from './view'

const model = new PixiShapesModel();
const view  = new PixiShapesView(model);
const controller = new PixiShapesController(view, model);

controller.startGame();

