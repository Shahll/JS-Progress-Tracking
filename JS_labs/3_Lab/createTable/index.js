function createTable(array) {
    let htmlCode = "<table>\n";
    for(let row of array){
        htmlCode += "  <tr>\n";
        htmlCode += `    <td>${row}</td>\n`;
        htmlCode += "  </tr>\n";
    }
    htmlCode += "</table>"
    return htmlCode;
}
const rows = ["Яблоко", "Груша", "Апельсин", "Банан"];
console.log(createTable(rows))