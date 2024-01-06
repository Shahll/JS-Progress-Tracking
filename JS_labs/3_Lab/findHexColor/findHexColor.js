function findHexColor(string) {
  let hexColor = string.match(/#([A-Fa-f0-9]{3}){1,2}\b/g)

  return hexColor
}

let string = "some text #123456 #ABC #123 #ABCDEF dada fa";
console.log(findHexColor(string));