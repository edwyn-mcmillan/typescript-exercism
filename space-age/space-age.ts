enum Planet {
  Earth = 31557600,
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Mars = 1.8808158,
  Jupiter = 11.862615, 
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132
}

export default class SpaceAge {
  seconds: number;
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private orbitalPeriodInEarthYears(period: number): number {
    return Number(((this.seconds / Planet.Earth) / period).toFixed(2));
  }

  onEarth = () => this.orbitalPeriodInEarthYears(1);
  onMercury = () => this.orbitalPeriodInEarthYears(Planet.Mercury);
  onVenus = () => this.orbitalPeriodInEarthYears(Planet.Venus);
  onMars = () => this.orbitalPeriodInEarthYears(Planet.Mars);
  onJupiter = () => this.orbitalPeriodInEarthYears(Planet.Jupiter);
  onSaturn = () => this.orbitalPeriodInEarthYears(Planet.Saturn);
  onUranus = () => this.orbitalPeriodInEarthYears(Planet.Uranus);
  onNeptune = () => this.orbitalPeriodInEarthYears(Planet.Neptune);
}
