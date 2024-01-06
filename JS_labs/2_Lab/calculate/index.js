function calculate(expression) {
  // regexp condition to split the expression
  const regexp = /([-+*/]+)/;
  // array with operations
  let operations = expression.split(regexp);
  // answer that returns at the end of the function
  let endAnswer = 0;

  // loop that goes by every element in operations and if
  // / or * was found it сounts the expression
  // we only count division and multiplication first, because they take precedence
  for (let i = 0; i < operations.length; i++)
    if (operations[i] == "*" || operations[i] == "/") {
      // temp condition to count
      let temp = "";
      // answer to this condition
      let answer = 0;

      // creating condition
      temp += operations[i - 1] + operations[i] + operations[i + 1];
      // removing this condition from array
      operations.splice(i - 1, 3);

      // does the math
      if (temp[1] == "*") answer = parseInt(temp[0]) * parseInt(temp[2]);
      else answer = parseInt(temp[0]) / parseInt(temp[2]);

      // adding this number into operations
      operations.splice(i - 1, 0, answer);
      // decrementing index by 1 because we get rid of 2 numbers in operations
      i--;
    }
  // a loop that goes through the rest of the expression without multiplication and division
  for (let i = 0; i < operations.length; i++)
    if (operations[i] == "+" || operations[i] == "-") {
      // temp condition
      let temp = "";
      // answer to condition
      let answer = 0;

      // creating condition
      temp += operations[i - 1] + operations[i] + operations[i + 1];
      //removing it from operations
      operations.splice(i - 1, 3);

      // does math
      if (temp[1] == "-") answer = parseInt(temp[0]) - parseInt(temp[2]);
      else answer = parseInt(temp[0]) + parseInt(temp[2]);

      // adding answer to operations
      operations.splice(i - 1, 0, answer);
      // decrementing idnex
      i--;

      // if operations have 3 or less numbers left it saves the answer
      if (operations.length <= 3) {
        endAnswer = answer;
      }
    }
  // returns end answer to user
  return endAnswer;
}

console.log(calculate("2+3-4/2*3")); // -1
