function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }
  let arr = [10, 130, 70, 12];
  let filtered = filterRange(arr, 10, 50);
  alert( filtered );