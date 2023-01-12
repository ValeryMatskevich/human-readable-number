module.exports = function toReadable (number) {
let dictionary = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}
if (number in dictionary) {
  return dictionary[number];
} else if (number > 10 & number < 100 ) {
  let first = number-number % 10;
  let second = number % 10;
  return dictionary[first] + ' ' + dictionary[second]
} else if (number%100 === 0) {
  let hundreds = Math.floor(number/100);
  return dictionary[hundreds] + ' hundred'
}
else if (number > 100 & (number-(number-number%100)) in dictionary) {
  let hundreds = Math.floor(number/100);
  let dozens = number - (number-number%100)
  return dictionary[hundreds] + ' hundred ' + dictionary[dozens]
} else {
  let hundreds = Math.floor(number/100);
  let dozens = number - number%10 - (number - number%100)
  let numb = number%10
  return dictionary[hundreds] + ' hundred ' + dictionary[dozens] + ' ' + dictionary[numb]
}
}