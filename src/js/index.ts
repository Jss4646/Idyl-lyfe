import * as PIXI from 'pixi.js';

import { createSprite } from './helpers';
import catImage from '../imgs/cat.jpg';

console.log(typeof catImage);

const options = {
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
};
const app = new PIXI.Application(options);
document.body.appendChild(app.view);

const sprite = createSprite(catImage);
sprite.scale.set(0.1, 0.1);

app.stage.addChild(sprite);
