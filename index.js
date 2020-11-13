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
    this.#validate(input);
    this.data = this.#convertToDecimal(input);
  }

  toInt() {
    return this.data;
  }

  toString() {
    return this.#convertToRoman(this.data);
  }

  #convertToDecimal(numeral) {
    if (typeof numeral === "number") {
      return numeral;
    }
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

  #convertToRoman(number) {
    const map = this.#objectFlip(this.#MAP);
    let output = "";
    let elements = [];
    let zeros = number.toString().length - 1;
    // split the number into units, tens, hundreads...
    for (let num of number.toString()) {
      elements.push(num + "0".repeat(zeros--));
    }
    // concatenate the numeral
    for (let element of elements) {
      // zero doesn't need to be converted
      if (element === "0") continue;

      // if the value exists in the map just add it e.g. 1000 -> M
      if (map.hasOwnProperty(element)) {
        output += map[element];
        continue;
      }

      // now let's handle more complex components like LXXX
      let remaining = parseInt(element);
      while (remaining > 0) {
        let key = Object.keys(map)
          .reverse()
          .find((value) => value <= remaining);
        output += map[key];
        remaining -= parseInt(key);
      }
    }

    return output;
  }

  #validateRomanNumeral(numeral) {
    if (!this.#VALIDATION_REGEX.test(numeral)) {
      throw Error("invalid input");
    }
  }

  #objectFlip(object) {
    const result = {};
    Object.keys(object).forEach((key) => {
      result[object[key]] = key;
    });
    return result;
  }

  #validate(input) {
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

    // check string is a valid roman numeral
    if (typeof input === "string") {
      this.#validateRomanNumeral(input);
    }
  }
}

module.exports = RomanNumber;
