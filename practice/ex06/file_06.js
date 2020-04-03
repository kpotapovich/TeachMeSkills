//домашняя работа


function moneyConverter() {
    let amount = document.getElementById('amount').value;
    let currentCurrency = document.getElementById('currency');
    let curId = currentCurrency.options[currentCurrency.selectedIndex].getAttribute('data-cur-id');
    fetch(`http://www.nbrb.by/api/exrates/rates/${curId}`)
        .then(response => response.json())
        .then(currency => {
            console.log(currency);
            let rate = currency.Cur_OfficialRate;
            let abbr = currency.Cur_Abbreviation;
            let msg = `You can buy ${(amount / rate * currency.Cur_Scale).toFixed(2)} ${abbr} for ${amount} BYN -- ${new Date(currency.Date).toDateString()}` ;
            console.log(msg);
            document.getElementById('result').innerHTML = msg;
        })
}


//класнная работа


let car2 = {
    name: ("lada"),

};

function getName1() {
 console.log(this.name);
}
getName1();
getName1.call(car2);



function getName2(prefix = '', postfix ='') {
    console.log( prefix + ' ' + this.name + '' + postfix);
}
getName2();
getName2.call(car2, 'my'); // my lada
let gatName2 = getName2.bind(car2);
getName2('my', '...'); //my lada ...


// классы и обькты

function flowerof(name) {
  this.name = name;
  this.getName = function () {
   return name;
  }
}
  let obj1 =  new Flowerof('diisy');
obj1.getName();


function flower(name) {
    this.name = name;
 this.setName = function (value) {
    if (_name){
        return
    }
   _name = value;
 };


let nameAs = { age:20,
    func: function () {
   return this.age;
    }
};
 let nameKi = {
    name: Kriss,
     function (){
        return this.name;
     }
 };

 function Person (name, age, gender) {
     let _name = name;
     let _age = age;
     this.gender = gender;
     this.getName = function () {
         return _name;
     };
     this.getAge = function () {
         return _age;
     }
 }

 Person.prototype.getGender = function(){
   return this.gender;
};



    let a = new Person('kris', 15);
    let b = new Person('kati', 25);
    const persons = [a, b];
 persons.map(person => person.getName());

persons.forEach(function (person) {
    if (person.getAge() <18) {
        console.log(person.getName() + "google");
    }else{
            console.log(person.getName() + "hi");
        }
    });