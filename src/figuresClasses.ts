type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  a: number;

  b: number;

  c: number;

  shape: Shape = 'triangle';

  constructor(color: Color, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('your error message');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const pole = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(pole * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  radius: number;

  shape: Shape = 'circle';

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const pole = Math.PI * this.radius * this.radius;

    return Math.floor(pole * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: Color;

  width: number;

  height: number;

  shape: Shape = 'rectangle';

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const pole = this.width * this.height;

    return Math.floor(pole * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
