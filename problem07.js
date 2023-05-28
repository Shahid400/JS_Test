function smallestSetSize(intervals) {
  let points = [];
  for (let interval of intervals) {
    points.push(interval[0], interval[1]);
  }
  points.sort((a, b) => a - b);

  let setSize = 0;
  let prevPoint = null;

  for (let point of points) {
    if (prevPoint !== point) {
      setSize += 2;
      prevPoint = point;
    }
  }

  return setSize;
}

let intervals = [[1, 3], [1, 4], [2, 5], [3, 5]];
console.log(smallestSetSize(intervals));