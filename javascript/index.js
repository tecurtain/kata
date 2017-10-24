let arabicToRoman = (number) => {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var numberConvert = '';

  for (var i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= number) {
      numberConvert += romanNumeral[i];
      number -= decimalValue[i];
    }
  }
  return numberConvert;
}

export {arabicToRoman}

// let arabicToRoman = (value) => {
//   var numTable = {
//     "I"     : 1,
//     "II"    : 2,
//     "III"   : 3,
//     "IV"    : 4,
//     "V"     : 5,
//     "VI"    : 6,
//     "VII"   : 7,
//     "VIII"  : 8,
//     "IX"    : 9,
//     "X"     : 10,
//     "L"     : 50,
//     "C"     : 100,
//     "D"     : 500,
//     "M"     : 1000
//   };
//
//   var romanNum = getKeyByValue(numTable, value)
//   return romanNum
// }
//
// function getKeyByValue(hash, value) {
//   var key;
//   for(key in hash) {
//     if (hash[key] == value) return key;
//   }
// }

// REGEX?
// Auto generate hash with key numbers and values roman numerals?

// What is it actaully doing? counts up three, then minus 1 from 5, then 5, then counts up to 8, then minus 1 from 10, then 10.  Repeat.
//
// 1
// 2
// 3
// (5-1)
// 5
// (5+1)
// (5+2)
// (5+3)
// (10-1)
// 10
//
// 10+1
// 10+2
// 10+3
// 10+(5-1)
// 10+5
// 10+(5+1)
// 10+(5+2)
// 10+(5+3)
// 10+(10-1)
// 10+10
