// https://repl.it/student/submissions/2775159

var waterBlocks = function (blocks) {
  // TODO: Implement
  let currentIndex = 1;
  let totalArea = 0;
  let leftWallIndex = 0;
  let rightWallIndex = 0;
  let lWallHeight = 0;
  let rWallHeight = 0;
  let shorterWallHeight = 0;
  while (currentIndex < blocks.length - 1) {
    // find first wall; currentIndex is index of beginning of a basin
    if (blocks[currentIndex] < blocks[currentIndex - 1]) {
      leftWallIndex = currentIndex;
      lWallHeight = blocks[leftWallIndex];
      let lowestDepth = null;
      // increment currentIndex until you find the rightWallIndex
      while (blocks[currentIndex] < blocks[leftWallIndex]) {
        if (lowestDepth === null || lowestDepth > blocks[currentIndex]) {
          lowestDepth = blocks[currentIndex];
        }
        currentIndex++;
      }
      // Now currentIndex is index of first place of equal or greater height than lWallHeight
      rightWallIndex = currentIndex;
      rWallHeight = blocks[currentIndex];
      if (lWallHeight <= rWallHeight) {
        shorterWallHeight = lWallHeight;
      } else {
        shorterWallHeight = rWallHeight;
      }
      // Find total area between walls, then subtract out places that are higher than the floor
      let area = shorterWallHeight * (rightWallIndex - leftWallIndex);
      for (var i = leftWallIndex; i <= rightWallIndex; i++) {
        area = area - (1 * (blocks[i] - ))
      }
    }
  }
};