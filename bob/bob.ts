import { isRegExp } from "util";

class Bob {
  hey(input: string) {
    if (this.isNothingSaid(input) && !this.isDigitSaid(input)) {
      return "Fine. Be that way!";
    }

    if (this.isUpperCase(input) && this.isQuestion(input)) {
      return "Calm down, I know what I'm doing!";
    }

    if (this.isQuestion(input)) {
      return "Sure.";
    }

    if (this.isUpperCase(input)) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }

  isNothingSaid(string: string) {
    return !string.match(/[a-zA-Z]/g);
  }

  isDigitSaid(string: string) {
    return string.match(/\d/g);
  }

  isUpperCase(string: string) {
    return string.toUpperCase() === string;
  }

  isQuestion(string: string) {
    return string.match(/\?/g);
  }
}

export default Bob;

/*
Sure === if it's a question
Whoa, chill out! === if it's ALL CAPS
Calm down, I know what I'm doing! === if you YELL a question
Fine. Be that way! === if nothing is said
Whatever === to anything else
*/
