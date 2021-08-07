const planets: { [key: string]: number } = {
  Earth: 1.0,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

const EARTH_YEAR_SECONDS = 31_557_600;

interface SpaceAge {
  [key: string]: any;
}

class SpaceAge {
  constructor(public readonly seconds: number) {
    for (const planet in planets) {
      this[`on${planet}`] = (): number =>
        this.orbitalPeriodInEarthYears(planets[planet]);
    }
  }

  private orbitalPeriodInEarthYears(period: number): number {
    return Math.round((this.seconds / EARTH_YEAR_SECONDS / period) * 100) / 100;
  }
}

export default SpaceAge;
