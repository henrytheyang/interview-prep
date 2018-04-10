// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let letterStorage = {};
  let sortedArray = [];
  let sortedString = '';
  for (var i = 0; i < s.length; i ++) {
    if (letterStorage[s[i]] === undefined) {
      letterStorage[s[i]] = 1;
    } else {
      letterStorage[s[i]]++;
    }
  }
  for (var prop in letterStorage) {
    let tempObj = {};
    tempObj.freq = letterStorage[prop];
    tempObj.letter = prop;
    sortedArray.push(tempObj);
  }
  sortedArray.sort((a, b) => {
    return b.freq - a.freq;
  });
  for (var j = 0; j < sortedArray.length; j++) {
    let letterCounter = 0;
    while (letterCounter < sortedArray[j].freq) {
      sortedString += sortedArray[j].letter;
      letterCounter++;
    }
  }
  return sortedString;
};


frequencySort('adfejfadfe');