let arr1 = [1, 6, 9];
let arr2 = [2, 4, 8, 10, 15];

function onlyMerge(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let arr3 = [];
  let i = 0;
  let j = 0;

  while (arr3.length < m + n) {
    if (i == n) {
      arr3.push(arr2[j]);
      j++;
    } else if (j == m) {
      arr3.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] < arr2[j]) {
        arr3.push(arr1[i]);
        i++;
      } else {
        arr3.push(arr2[j]);
        j++;
      }
    }
  }
  return arr3;
}
console.log(onlyMerge(arr1, arr2));
