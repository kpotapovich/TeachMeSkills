//1
var student1 = {firstname:"katia",lastName:"chitnik",age: 24, grades:[5, 2, 3, 4, 5],course: 1,gender:"woman",};
var student2 = {firstname:"kris",lastName:"potapovich",age: 22, grades:[1, 5, 3, 4, 5],course: 2,gender:"woman",};
var student3 = {firstname:"andrei",lastName:"naruts",age: 20, grades:[5, 5, 3, 4, 5],course: 3,gender:"man",};
var student4 = {firstname:"lusha",lastName:"prokhorenko",age: 22,grades:[3, 2, 3, 3, 0],course: 2,gender:"man",};
var student5 = {firstname:"Boris",lastName:"Smith",age: 27,grades:[1, 2, 3, 4, 0],course: 4,gender:"man",};
var student6 = {firstname:"Anastasia",lastName:"Wilson",age: 25,grades:[2, 2, 2, 4, 5],course: 3,gender:"woman",};
var student7 = {firstname:"Valeria",lastName:"Harris",age: 22,grades:[4, 2, 3, 4, 5],course: 3,gender:"woman",};
var student8 = {firstname:"Elena",lastName:"Wood",age: 20,grades:[1, 2, 3, 0, 0],course: 3,gender:"woman"};
var student9 = {firstname:"Irina",lastName:"Turner",age: 21,grades:[5, 2, 3, 4, 5],course: 3,gender:"woman"};
var student10 = {firstname:"Dmitry",lastName:"prokhorenko",age: 28,grades:[1, 5, 3, 4, 3],course: 3,gender:"man"};
//2
var data = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];
//3
for(var i = 0; i < data.length; i++) {
    //var avg = (data[i].grades[0] + data[i].grades[1] + data[i].grades[2] + data[i].grades[3] + data[i].grades[4]) / 5;
    var avg = 0;
    for(var j = 1; j < data[i].grades.length; j++) {
        avg = avg + data[i].grades[j];
    }
    avg = avg / data[i].grades.length;

    if (avg < 3 && data[i].gender === "man") {
        data[i].isReadyForArmy = true;
        delete data[i].grades
    }
}
//4
var armyArr = [];
//6
for(i = 0; i < data.length; i++) {
    if (data[i].isReadyForArmy) {
        armyArr[armyArr.length] = data[i];
    }
}
//7
console.log(armyArr);