// https://repl.it/student/submissions/2774859

var findPivot = function (array) {
	// TODO: Implement
  let rotationIndex = 0;
  let left = 0;
  let right = array.length - 1;
  // Use binary search
  let findMiddleindex = (start, end) => {
    return Math.floor((start - end) / 2);
  }
  let currentIndex = 0;
  let binarySearch = (leftBound, rightBound) => {
    currentIndex = findMiddleindex(left, right);
    // Compare first letter of current word to first letter of next and previous words; if it's the target, assign
    if (array[currentIndex][0] < array[currentIndex - 1][0] && array[currentIndex][0] < array[currentIndex + 1][0]) {
      rotationIndex = currentIndex;
    } else if (someArray.length === 1) {
      rotationIndex === currentIndex;
      // Else, binary search top or bottom
    } else if (array[currentIndex][0] < array[currentIndex + 1][0] && array[currentIndex][0] > array[currentIndex - 1][0]) {
      // search top half
      left = currentIndex + 1;
      binarySearch(left, right);
    } else {
      // search bottom half
      right = currentIndex - 1;
      binarySearch(left, right);
    }
  }
  binarySearch(array);
	return rotationIndex;
};



findPivot(['b', 'c', 'a'])
