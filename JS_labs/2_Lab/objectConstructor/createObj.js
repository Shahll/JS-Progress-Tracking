class Dog {

    constructor(options) {
        this.name = options.name;
        this.dogBreed = options.dogBreed;
        this._age = options.age
    }

    voice() {
        let dogsAge = this._age;
        let speech = (dogsAge < 1) ? "tyaf" :
        (dogsAge < 3) ? "gav" : "rrr";
        
        console.log(speech);
    }
 
}
let shero = new Dog({
    name: "shero",
    dogBreed: "spitz",
    age: 0.5
});
let cloudy = new Dog({
    name: "cloudy",
    dogBreed: "haski",
    age: 2
});
let rex = new Dog({
    name: "rex",
    dogBreed: "DeutscherSchäferhundRoyal",
    age: 3
});

shero.voice(); // tyaf
cloudy.voice(); // gav
rex.voice(); // rrr