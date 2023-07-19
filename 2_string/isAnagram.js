function areAnagrams(str1, str2) {
    str1 = str1.split(" ").join("").toLowerCase();
    str2 = str2.split(" ").join("").toLowerCase();
  
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
  
    return sortedStr1 === sortedStr2;
}

  
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); 
