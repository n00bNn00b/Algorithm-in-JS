// function for the sorted arrays
const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];
    const rightElement = rightArr[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};
// for testing I added two sorted arrays if the function works for two sorted arrays
// console.log(merge([1, 5], [2, 6]));

// the recursive function
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  // dividing the array and getting middle element/index
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr)); // recusrsion
};

const givenArray = [12, 11, 13, 5, 6, 7];
console.log(mergeSort(givenArray));
