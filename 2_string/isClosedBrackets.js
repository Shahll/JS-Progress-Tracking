function isClosed(string) {
  const brackets = { "{": "}", "(": ")", "[": "]" };
  const stack = [];

  for (let char of string) 
    if (brackets[char]) stack.push(char);
    else if (char === "}" || char === ")" || char === "]")
      if (brackets[stack.pop()] !== char) return false;
  

  return stack.length == 0;
}

let string = "{([])}";
console.log(isClosed(string));
