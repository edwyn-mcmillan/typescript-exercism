class Gigasecond {

  constructor (private startDate : Date) { }

  public date = () : Date => new Date(this.startDate.getTime() + 1000000000000)
  
}

export default Gigasecond
