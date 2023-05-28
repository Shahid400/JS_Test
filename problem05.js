function convertBase(binaryNumber) {
  let decimal = parseInt(binaryNumber, 2);
  let base6Number = decimal.toString(6);
  return parseInt(base6Number);
}

let binaryNumber = "10101";
console.log(convertBase(binaryNumber));