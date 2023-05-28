function countPaths(rows, columns) {
  if (rows === 1 || columns === 1) {
    return 1;
  }

  let paths = new Array(rows).fill(1);

  for (let i = 1; i < columns; i++) {
    for (let j = 1; j < rows; j++) {
      paths[j] += paths[j - 1];
    }
  }

  return paths[rows - 1];
}

let rows = 2;
let columns = 2;
console.log(countPaths(rows, columns));
