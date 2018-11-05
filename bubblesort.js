let swapCounter = 0;
let comparisonCounter = 0;

function bubbleSort(array) {
  /* your code here */

  //swap() will be invoked somewhere here.
  let sorted = true;
  while (sorted) {
    sorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      // let tempNum = [];
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        sorted = true;
        // tempNum = array[i];
        // array[i] = array[i + 1];
        // array[i + 1] = tempNum;
      }
    }
  }

  return array;
}

//swapping function
function swap(i, j, array) {
  let tempNum = [];
  tempNum = array[i];
  array[i] = array[j];
  array[j] = tempNum;
  swapCounter++;
  return array;
}
