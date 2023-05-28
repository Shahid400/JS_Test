function validateRules(rules) {
  let positions = {};

  for (let rule of rules) {
    let [pointA, direction, pointB] = rule.split(" ");
    if (!positions[pointA]) positions[pointA] = {};
    if (!positions[pointB]) positions[pointB] = {};

    if (direction === "N") {
      if (positions[pointA].hasOwnProperty("S") || positions[pointB].hasOwnProperty("N")) {
        return false;
      }
      positions[pointA].N = true;
      positions[pointB].S = true;
    } else if (direction === "S") {
      if (positions[pointA].hasOwnProperty("N") || positions[pointB].hasOwnProperty("S")) {
        return false;
      }
      positions[pointA].S = true;
      positions[pointB].N = true;
    } else if (direction === "E") {
      if (positions[pointA].hasOwnProperty("W") || positions[pointB].hasOwnProperty("E")) {
        return false;
      }
      positions[pointA].E = true;
      positions[pointB].W = true;
    } else if (direction === "W") {
      if (positions[pointA].hasOwnProperty("E") || positions[pointB].hasOwnProperty("W")) {
        return false;
      }
      positions[pointA].W = true;
      positions[pointB].E = true;
    } else if (direction === "NE") {
      if (positions[pointA].hasOwnProperty("SW") || positions[pointB].hasOwnProperty("NE")) {
        return false;
      }
      positions[pointA].NE = true;
      positions[pointB].SW = true;
    } else if (direction === "NW") {
      if (positions[pointA].hasOwnProperty("SE") || positions[pointB].hasOwnProperty("NW")) {
        return false;
      }
      positions[pointA].NW = true;
      positions[pointB].SE = true;
    } else if (direction === "SE") {
      if (positions[pointA].hasOwnProperty("NW") || positions[pointB].hasOwnProperty("SE")) {
        return false;
      }
      positions[pointA].SE = true;
      positions[pointB].NW = true;
    } else if (direction === "SW") {
      if (positions[pointA].hasOwnProperty("NE") || positions[pointB].hasOwnProperty("SW")) {
        return false;
      }
      positions[pointA].SW = true;
      positions[pointB].NE = true;
    }
  }

  return true;
}

let rules = ["A N B", "B NE C", "C N A"];
console.log(validateRules(rules));