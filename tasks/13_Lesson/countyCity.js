let countyMap = new Map();

countyMap.set("Germany", "Berlin");
countyMap.set("Ukraine", "Kyiv");
countyMap.set("Austria", "Vienna");
countyMap.set("UK", "London");

for (let city of countyMap.values())
    console.log(city);

console.log()
for (let county of countyMap.keys())
    console.log(county);

console.log()
for (let countyAndCity of countyMap)
    console.log(countyAndCity);
