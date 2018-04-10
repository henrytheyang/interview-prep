// Vowel doubler
// Given an array of characters, return the array with every vowel doubled. For example:

// ['w','h','a','t',' ','o','n',' ','e','a','r','t','h',' ','a','r','e',' ','y','o','u',' ','t','a','l','k','i','n','g',' ','a','b','o','u','t','?']

// ==>

// ['w','h','a','a','t',' ','o','o','n',' ','e','e','a','a','r','t','h',' ','a','a','r','e','e',' ','y','o','o','u','u',' ','t','a','a','l','k','i','i','n','g',' ','a','a','b','o','o','u','u','t','?']
// Constraints
// The challenge in this problem is in meeting its (arbitrary) constraints:

  // Do not convert into strings or manipulate strings at all.
  // Do not create any other data structures.
  // In particular, don't instantiate a new array.
  // The big-O of the solution should be O(n).

// Clarifications
  // Does the array of characters have to be single characters?
  // For example, can i turn [‘a’, ‘b’, ‘c’] into [‘aa’, ‘b’, ‘c’]?

  // Answer: See the constraint above: Do not convert into strings or manipulate strings at all.

let vowelDoubler = (arrChars) => {
  let vowelCount = 0;
  for (var i = 0; i < arrChars.length; i++) {
    if (arrChars[i] === 'a' || arrChars[i] === 'e' || arrChars[i] === 'i' || arrChars[i] === 'o' || arrChars[i] === 'u') {
      vowelCount++;
    }
  }
  for (var j = arrChars.length - 1; j >= 0; j--) {
    if (arrChars[j] === 'a' || arrChars[j] === 'e' || arrChars[j] === 'i' || arrChars[j] === 'o' || arrChars[j] === 'u') {
      arrChars[j + vowelCount] = arrChars[j];
      vowelCount--;
      arrChars[j + vowelCount] = arrChars[j];
    } else {
      arrChars[j + vowelCount] = arrChars[j];
    }
  }
  return arrChars;
};