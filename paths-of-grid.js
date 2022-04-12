// count the number of different ways to move through a 6x9 grid
// here I used 6 for x and 9 for y
// you may use different values

const numberOfPaths = (x, y) => {
  if (x == 1 || y == 1) {
    return 1;
  } else {
    return numberOfPaths(x - 1, y) + numberOfPaths(x, y - 1);
  }
};

console.log(numberOfPaths(6, 9));
