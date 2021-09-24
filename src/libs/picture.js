export class Picture {
  constructor(width, height, pixels) {
    this.width = width;
    this.height = height;
    this.pixels = pixels;
  }

  static empty(width, height, color) {
    let pixels = new Array(width * height).fill(color);
    return new Picture(width, height, pixels);
  }

  pixel(x, y) {
    return this.pixels[x + y * this.width];
  }

  draw(pixels) {
    const copy = [...this.pixels];
    pixels.forEach(({ x, y, color }) => {
      copy[x + y * this.width] = color;
    });

    return new Picture(this.width, this.height, copy);
  }
}

export const updateState = (state, action) => {
  return { ...state, ...action };
};
