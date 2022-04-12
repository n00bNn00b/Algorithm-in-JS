// quicksort solution

const quickSort = (array) => {
  // returning the array if there is no more than 1 element in the array
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1]; //pivot array
  const leftArr = [];
  const rightArr = [];

  // here I am using es6 for loop instead of traditional for loop and ternary operator. You may use traditional for loop if you're comfortable with it. If needed also the traditional for loop, I may add later. I have used spread operator too instead of using array.push(something) to reduce code.
  for (const element of array.slice(0, array.length - 1)) {
    //   ternary operator like if else condition in traditional coding
    element < pivot ? leftArr.push(element) : rightArr.push(element);
  }
  // recursion
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }
};

const givenArray = [12, 11, 13, 5, 6, 7, 100, 50, 1000, 1, 3, 2];

// to understand I am printing the given array. you may remove this line
console.log("Given Array: ", givenArray);
// solution array of quicksort
console.log("Quick Sort: ", quickSort(givenArray));
