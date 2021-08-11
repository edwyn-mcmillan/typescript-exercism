export default class ComplexNumber {
  constructor(public real: number, public imag: number) {}

  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  sub(other: ComplexNumber): ComplexNumber {
    return this.add(new ComplexNumber(-other.real, -other.imag));
  }

  //(a * c - b * d) + (b * c + a * d)
  mul(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real
    );
  }

  //(a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2)
  div(other: ComplexNumber): ComplexNumber {
    const denom = other.real * other.real + other.imag * other.imag;
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) / denom,
      (this.imag * other.real - this.real * other.imag) / denom
    );
  }

  get abs(): number {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  get exp(): ComplexNumber {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag)
    );
  }
}
