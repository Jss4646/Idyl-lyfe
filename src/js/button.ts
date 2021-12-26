import { NineSlicePlane, Texture } from 'pixi.js';

type Settings = {width?: number, height?: number};
type OnClick = () => void;
type OnHover = () => void;

export default class Button extends NineSlicePlane {
  settings: {
    width: number,
    height: number,
  };
  onClick: OnClick;
  onHover: OnHover;
  constructor(settings?: Settings, onClick?: OnClick, onHover?: OnHover) {
    const texture = Texture.WHITE;
    const indentAmount = 20;

    super(texture, indentAmount);
    this.settings = {
      ...settings,
      width: 200,
      height: 100,
    };

    this.onClick = onClick;
    this.onHover = onHover;
  }
}
