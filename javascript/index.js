let arabicToRoman = (value) => {
  var numTable = {
    "I"   : 1,
    "II"  : 2,
    "III" : 3,
    "IV"  : 4,
    "V"   : 5
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

// 1 = I
// 2 = II
// 3 = III
// 4 = IV
// 5 = V
// 6 = VI
// 7 = VII
// 8 = VIII
// 9 = IX
// 10 = X
//
// I	= 1
// V	= 5
// X	= 10
// L	= 50
// C	= 100
// D	= 500
// M	= 1,000
