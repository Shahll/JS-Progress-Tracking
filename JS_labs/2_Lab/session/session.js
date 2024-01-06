class Discipline {
    constructor(name, points, passed) {
      this.name = name;
      this.points = points;
      this.passed = passed;
    }
}

// Idk why I use both "score" and "point" as variable names ;/
class Session {
    constructor() {
        this.disciplines = [];
    }

    addDiscipline(name, points, passed) {
        const discipline = new Discipline(name, points, passed);
        this.disciplines.push(discipline);
    }

    printDisciplines() {
        function sortByStatus(statusA, statusB){
            return statusB.passed - statusA.passed;
        }

        this.disciplines.sort(sortByStatus);

        this.disciplines.forEach((discipline) =>{
            const status = discipline.passed ? "passed" : "failed";
            console.log(`Discipline: ${discipline.name}, Score: ${discipline.points}, Status: ${status}`)
        });
    }

    retakeDiscipline(name, points) {
        for(let i = 0; i < this.disciplines.length; i++) {
            if (this.disciplines[i].name == name) {
                this.disciplines[i].points = points;
                this.disciplines[i].passed = points >= 60;
                return;
            } 
            
        }
        const discipline = new Discipline(name, points, points >= 60);
        this.disciplines.push(discipline);

    }

    averagePoint() {
        let averageScore = 0;
        for (let i = 0; i < this.disciplines.length; i++){
            averageScore += this.disciplines[i].points;
        }
        averageScore = averageScore / this.disciplines.length;
        console.log(`You avarage score: ${averageScore }`);
    }

    unaccountedDisciplines() {
        let count = 0;
        for (let i = 0; i < this.disciplines.length; i++){
            if (!this.disciplines[i].passed)
                count++;
        }
        console.log(`Number of unaccounted disciplines: ${count}`)
    }

    highestScore() {
        let highestDisciplineScore = "";
        let highestScore = "";
        for (let i = 0; i < this.disciplines.length; i++){
            if (highestScore < this.disciplines[i].points) {
                highestScore = this.disciplines[i].points;
                highestDisciplineScore = this.disciplines[i].name;
            }
        }
        console.log(`Your have the highest score in: ${highestDisciplineScore}`)
    }

    geyDisciplinesByScore(score) {
        let arrDisciplines = [];
        for (let i = 0; i < this.disciplines.length; i++){
            if(this.disciplines[i].points == score)
                arrDisciplines.push(this.disciplines[i].name); 
        }
        return arrDisciplines;
    }
    
}
const session = new Session();

session.addDiscipline("Math", 80, true); // add
session.addDiscipline("Inf", 45, false); 

session.retakeDiscipline("Math", 30); // modify existing discipline 
session.averagePoint() // average score in all subjects
session.unaccountedDisciplines() // the subjects you failed at
session.highestScore() // subject with the hgihest grade
console.log(session.geyDisciplinesByScore(30)) // all disciplines where you have 30 score

session.printDisciplines() // just printing list of disciplines