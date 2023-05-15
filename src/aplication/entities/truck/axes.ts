export class Axes {
  private readonly axes: number;

  get value(): number {
    return this.axes;
  }

  private validateAxesLength(axes: number): boolean {
    return axes >= 2 && axes <= 3;
  }

  constructor(axes: number) {
    const isAxesLengthValid = this.validateAxesLength(axes);

    if (!isAxesLengthValid) {
      throw new Error('Axes invalid number of axes error.');
    }

    this.axes = axes;
  }
}
