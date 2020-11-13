class RomanNumber {
  constructor(input) {
    this.validate(input);
  }

  validate(input) {
    if (input === null || input === "") {
      throw Error("value required");
    }

    if (
      typeof input === "number" &&
      !Number.isInteger(input) &&
      typeof input !== "stirng"
    ) {
      throw Error("invalid input");
    }

    if (Number.isInteger(input) && (input < 1 || input > 3999)) {
      throw Error("invalid range");
    }
  }
}

module.exports = RomanNumber;
