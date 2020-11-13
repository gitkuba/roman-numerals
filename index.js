class RomanNumber {
  constructor(input) {
    this.validate(input);
    if (typeof input === "string") {
      this.validateRomanNumber(input);
      this.data = this.convertToDecimal(input);
    } else {
      this.data = input;
    }
  }

  validate(input) {
    // check empty values
    if (input === null || input === "") {
      throw Error("value required");
    }

    // check input is a valid int or a string
    if (
      typeof input === "number" &&
      !Number.isInteger(input) &&
      typeof input !== "stirng"
    ) {
      throw Error("invalid input");
    }

    // check input is in correct range
    if (Number.isInteger(input) && (input < 1 || input > 3999)) {
      throw Error("invalid range");
    }
  }
}

module.exports = RomanNumber;
