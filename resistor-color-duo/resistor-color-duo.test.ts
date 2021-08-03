import { ResistorColour } from './resistor-color-duo'

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    const resistorColour = new ResistorColour(['brown', 'black'])
    expect(resistorColour.value()).toEqual(10)
  })

  it('Blue and grey', () => {
    const resistorColour = new ResistorColour(['blue', 'grey'])
    expect(resistorColour.value()).toEqual(68)
  })

  it('Yellow and violet', () => {
    const resistorColour = new ResistorColour(['yellow', 'violet'])
    expect(resistorColour.value()).toEqual(47)
  })

  it('Orange and orange', () => {
    const resistorColour = new ResistorColour(['orange', 'orange'])
    expect(resistorColour.value()).toEqual(33)
  })

  it('Ignore additional colors', () => {
    const resistorColour = new ResistorColour(['green', 'brown', 'orange'])
    expect(resistorColour.value()).toEqual(51)
  })

  it('Throws error when not enough colors', () => {
    expect(() => new ResistorColour(['green'])).toThrowError(
      'At least two colors need to be present'
    )
  })
})
