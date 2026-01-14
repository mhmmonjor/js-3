let namtaNumber = 5;

for (let i = 1; i < 11; i++) {
    let fainalresult =
    console.log(namtaNumber + " " + "x" + " " + i + "=" + " " + namtaNumber * i);
    console.log(fainalresult);
}

//    **************************************************************
let teamMembers = {
    name: "Monjor",
    age: 23,
    area: "Rayarbagh",
}
console.log(teamMembers.name);
console.log(teamMembers.age);
console.log(teamMembers.area);


// ************************************************************

let teamMember = ["A", " B", "C", " D", "E", 5]
console.log(teamMember[2]);

let teams = [
    { name: "Monjor", age: 20 },
    { name: "Sajid1", age: 21 },
    { name: "Rafi2", age: 24 },
]
console.log(teams[1].name);
console.log(teams[2].name);
// ************************************************************

let teamsName = {
    teamsOne:
    {
        name: "Sagor",
        age: 25,
    },

    teamsTwo:
    {
        name: "Alvi",
        age: 23,
    },
};

console.log(teamsName.teamsOne);

console.log(teamsName.teamsTwo);

// ************************************************************

function salman() {
    let x = 5;
    let y = 5;
    let z = x + y;
    console.log(z);

}
salman();
let x = () => {
    let x = 10;
    console.log(x);

};
x();