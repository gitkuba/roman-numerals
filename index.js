class RomanNumber {
  #VALIDATION_REGEX = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  #MAP = {
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
      this.#validateRomanNumeral(input);
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

  #validateRomanNumeral(numeral) {
    if (!this.#VALIDATION_REGEX.test(numeral)) {
      throw Error("invalid input");
    }
  }

  #convertToDecimal(numeral) {
    let output = 0;

    for (let i = 0; i < numeral.length; i++) {
      // check if it's a double-letter sign.
      let double = numeral.slice(i, i + 2);
      if (this.#MAP.hasOwnProperty(double)) {
        output += this.#MAP[double];
        i++;
        continue;
      }
      // orherwise go for a single-letter sign.
      let single = numeral.slice(i, i + 1);
      output += this.#MAP[single];
    }

    return output;
  }

  #convertToRoman(number) {}

  toInt() {
    return this.data;
  }

  toString() {
    return this.#convertToRoman(this.data);
  }
}

console.log(new RomanNumber("MCDLXXXII").toInt());

module.exports = RomanNumber;
