class Bob {
  hey(input: string): string {
    if (!this.isAnythingSaid(input) && !this.isDigitSaid(input)) {
      return "Fine. Be that way!";
    }

    if (this.isUpperCase(input) && this.isQuestion(input) && this.isAnythingSaid(input)) {
      return "Calm down, I know what I'm doing!";
    }

    if (this.isQuestion(input)) {
      return "Sure.";
    }

    if (this.isUpperCase(input) && this.isAnythingSaid(input)) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }

  private isAnythingSaid(string: string) {
    return string.match(/[a-zA-Z]/g);
  }

  private isDigitSaid(string: string) {
    return string.match(/\d/g);
  }

  private isUpperCase(string: string) {
    return string.toUpperCase() === string;
  }

  private isQuestion(string: string) {
    return string.match(/\?\s*$/g); 
  }
}

export default Bob;

