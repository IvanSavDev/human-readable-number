module.exports = function toReadable (number) {
  let arrayNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  let arrayPref = ['zero', 'one', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine'];

  const numberToString = String(number);
  const lengthNumber = numberToString.length;

  if (lengthNumber === 1) {
    return arrayNumbers[number];
  } else if (lengthNumber === 2) {
    return translateTwoDigitNumber(numberToString[0] + numberToString[1]);
  } else if (lengthNumber === 3) {
    if (numberToString[1] == 0 && numberToString[2] == 0) {
      return `${arrayNumbers[numberToString[0]]} hundred`;
    } else {
      return `${arrayNumbers[numberToString[0]]} hundred ${translateTwoDigitNumber(numberToString[1] + numberToString[2])}`
    }
  }

  function translateTwoDigitNumber(twoDigitNumbers) {
    const firstDigit = Number(twoDigitNumbers[0]);
    const twoDigit = Number(twoDigitNumbers[1]);

    if (firstDigit === 0) {
      return arrayNumbers[twoDigit];
    } else if (firstDigit === 1) {
      return arrayNumbers[Number((firstDigit + '') + twoDigit)]
    } else if (twoDigit === 0) {
      return `${arrayPref[firstDigit]}ty`
    } else {
      return `${arrayPref[firstDigit]}ty ${arrayNumbers[twoDigit]}`;
    }
  }
}
