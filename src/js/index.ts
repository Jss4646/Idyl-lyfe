import {
  Application, utils, Loader, Sprite,
} from 'pixi.js';

import img from '../imgs/cat.jpg';

console.log(img);

const options = {
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
};
const app = new Application(options);
document.body.appendChild(app.view);
const { TextureCache } = utils;

Loader.shared.add('cat', img).load(() => {
  console.log(TextureCache);
  const cat = new Sprite(Loader.shared.resources.cat.texture);

  cat.scale.set(0.1, 0.1);

  app.stage.addChild(cat);
});
