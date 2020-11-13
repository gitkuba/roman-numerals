
class RomanNumber{
  constructor(input) {
    this.validate(input)
  }

  validate(input){
    if (input === null || input === ''){
      throw Error('value required')
    }
  }
}

module.exports = RomanNumber
