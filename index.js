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
  }
}

module.exports = RomanNumber;
