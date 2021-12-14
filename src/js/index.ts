import * as PIXI from 'pixi.js';
import img from '../imgs/cat.jpg';

const options = {
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
};
const app = new PIXI.Application(options);
document.body.appendChild(app.view);
