let arabicToRoman = (value) => {
  var numTable = {
    "I"     : 1,
    "II"    : 2,
    "III"   : 3,
    "IV"    : 4,
    "V"     : 5,
    "VI"    : 6,
    "VII"   : 7,
    "VIII"  : 8,
    "IX"    : 9,
    "X"     : 10,
    "L"     : 50,
    "C"     : 100,
    "D"     : 500,
    "M"     : 1000
  };

  var romanNum = getKeyByValue(numTable, value)
  return romanNum
}

function getKeyByValue(hash, value) {
  var key;
  for(key in hash) {
    if (hash[key] == value) return key;
  }
}

export {arabicToRoman}
