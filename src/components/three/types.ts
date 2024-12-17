export interface Snow {
  count: number;
  randomness: number;
  randomnessPower: number;
  sizeMin: number;
  sizeMax: number;
  opacityMin: number;
  opacityMax: number;
  gravity: number;
}

export interface Wind {
  current: number;
  force: number;
  target: number;
  min: number;
  max: number;
  easing: number;
}