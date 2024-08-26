function fibs(n) {
  let array = [0, 1];
  if (n == 0) {
    array = [];
  } else if (n == 1) {
    array = [0];
  }
  for (let i = 2; i < n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  console.log(array);
}

function fibsRec(n) {
  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
  }
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let half = Math.floor(array.length / 2);
  let right = array.slice(half);
  let left = array.slice(0, half);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let sortedArray = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] > right[0]) {
        sortedArray.push(right[0]);
        right.shift();
      } else {
        sortedArray.push(left[0]);
        left.shift();
      }
    }
    while (left.length > 0) {
      sortedArray.push(left[0]);
      left.shift();
    }
    while (right.length > 0) {
      sortedArray.push(right[0]);
      right.shift();
    }
    return sortedArray;
  }
}

console.log(
  mergeSort([7, 5, 1, 2, 3, 9, 10, 4, 13, 6, 12, 17, -5, -8, 100, -13, 0])
);
