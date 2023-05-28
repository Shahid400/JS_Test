function performActions(actions) {
  let stack1 = [];
  let stack2 = [];
  let result = [];

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] >= 0) {
      stack1.push(actions[i]);
    } else {
      if (stack2.length === 0) {
        result.push(-1);
      } else {
        result.push(stack2.pop());
      }
    }
  }

  while (stack1.length > 0) {
    stack2.push(stack1.pop());
  }

  while (stack2.length > 0) {
    result.push(stack2.pop());
  }

  return result;
}

let actions = [1, 2, -1, 3, 4, -1, -1];
console.log(performActions(actions));