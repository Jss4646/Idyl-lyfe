import * as PIXI from 'pixi.js';

export function createSprite(image: string): PIXI.Sprite {
  const base = new PIXI.BaseTexture(image);
  const texture = new PIXI.Texture(base);
  return new PIXI.Sprite(texture);
}
