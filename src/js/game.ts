import {
  Container, Renderer, Sprite, Ticker, UPDATE_PRIORITY, Text,
} from 'pixi.js';
import img from '../imgs/red-blood-cell.png';
import Button from './button';

export default class Game {
  renderer: Renderer;
  stage: Container;
  sprites: {[key: string]: Sprite};
  texts: {[key: string]: Text};
  score: number;

  constructor() {
    const options = {
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
      backgroundColor: 0xffec8f,
    };

    this.renderer = new Renderer(options);
    this.stage = new Container();
    this.sprites = {};
    this.texts = {};
    this.score = 0;

    document.body.appendChild(this.renderer.view);

    this.setup();
  }

  setup() {
    this.texts.score = new Text(`${this.score}`);
    this.stage.addChild(this.texts.score);

    this.stage.addChild(new Button());

    this.createSprites();
  }

  loop(delta: number) {
    this.texts.score.text = `${this.score}`;
    this.renderer.render(this.stage);
  }

  start() {
    const ticker = new Ticker();
    ticker.add((delta) => this.loop(delta), UPDATE_PRIORITY.LOW);
    ticker.start();
  }

  createSprites() {
    // TODO make a sprite-sheet
    // don't do this, is inefficient
    this.sprites.redBloodCell = Sprite.from(img);
  }
}
