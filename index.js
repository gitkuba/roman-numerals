class RomanNumber {
  #VALUE_MAP = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  constructor(input) {
    this.validate(input);
    if (typeof input === "string") {
      this.#validateRomanNumber(input);
      this.data = this.#convertToDecimal(input);
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

  #validateRomanNumber(num) {
    const romSymbols = Object.keys(this.#VALUE_MAP);
    const maxOccurancesSingleSign = 3;
    const maxOccurancesDoubleSign = 1;
    console.log(romSymbols);
  }

  #convertToDecimal() {}

  #convertToRoman() {}

  toInt() {
    return this.data;
  }

  toString() {
    return this.#convertToRoman(this.data);
  }
}

const invalid = "MMMMCMXCIX";
const valid = "MCMLXXX";

new RomanNumber(invalid);

module.exports = RomanNumber;
