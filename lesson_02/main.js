// var burger = document.getElementById("burger");
// var menu = document.getElementById("menu");
// var bg = document.getElementById("bg");
// burger.addEventListener("click", function () {
//     var isCross = burger.classList.contains("cross");
//     if (isCross){
//         burger.classList.remove("cross");
//         menu.classList.remove("visible");
//         bg.classList.remove("visible");
// } else {
//         burger.classList.add("cross");
//         menu.classList.add("visible");
//         bg.classList.add("visible");
//     }
// });
// $('.lead_cot').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false,

// });
// var profile = {name:"katia", surname:"chitnik", age: 24, faculty:"journalism"};
// var template = {name:"kris", surname:"potapovich", age: 22, favoriteColor:"red"};
// var passport = {name:"andrei", surname:"naruts", age: 20, residence:"minsk"};
// var certificate = {name:"lusha", surname:"prokhorenko", patronymic:"Alexandrovich", age: 29,};
// var data = [profile, template, passport, certificate];
// console.log (data);

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

var students = [

]




function setAvg (arr)
   arr.forEach((function (student) {
       let studentGrades = student.grades;
       let = sum = 0;
       for (let j = 0; j < gradess.length; j++) {
           let grade = studentGrades[j];
           sum = sum + grade;
       }

   }))
{
    for (let i = 0; i < gradess.length; i++) {
        let student = gradess [i];
        let studentGrades = student.grades;

        let sum = 0;

        for (let j = 0; j < gradess.length; j++) {
            let grade = studentGrades[j];
            sum = sum + grade;
        }

        let average = sum / studentGrades.length;
        gradess.avg = average;
    }
}


function setIsReadyForArmy (gradess) {
    gradess.filter(fanction(students)
    if (
        student.avg < 3
        && students.isFemale === false
        && students.age >= 18
        && students.age < 27) {
        students.isReadyForArmy = true;
    })
    {
        return true;
    }



    )
    for (let i = 0; i < gradess.length; i++) {
        let student = gradess[i];

        if (student.avg < 3
            && students.isFemale === false
            && students.age >= 18
            && students.age < 27) {
            students.isReadyForArmy = true;
        }
}


    // student.isReadyForArmy = (student.avg < 3 && student.isFemale === false && student.age >= 18 && student.age < 27)
}


let armestudents = getStudentsForArmy(students)
function getStudentsForArmy(arg) {
    let studentForArmy = [arr];

    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];

        if (student.isReadyForArmy === true) {
            studentForArmy.push(student);
        }
    }

    return studentForArmy;
}


