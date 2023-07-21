export function binarySearch(arr: number[], val: number): number {
  let low = 0;
  let high = arr.length - 1;
  let middle = getMiddle(low, high);

  while (low <= high) {
    if (arr[middle] === val) {
      return middle;
    } else if (val > arr[middle]) {
      low = middle + 1;
    } else if (val < arr[middle]) {
      high = middle - 1;
    }
    middle = getMiddle(low, high);
  }

  return -1;
}

export function getMiddle(low: number, high: number): number{
  return Math.floor((high + low) / 2);
}