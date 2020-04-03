//классы

class Car {
    #name;
    #cc;
    static PI = 3.14;
        constructor(name, cc) {
                this.#name = name;
                this.#cc = cc;
        }

    getName() {
         return this.#name;
    }
    #getCC(){
        //приватная функция
    }

    static gatPI(){
        return Car.PI;
    }

}
/////////////////////////

new Car('alex').gatName();
// публичные
console.log(new Car('alex').name);
// // приватные
// Car.PI;
//


////////////////////

class User {
    static  CanSendMessage = true;
    name = 'Kris';
    password = '25423687';

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    sendMessage(msd){
        console.log('данные');
    }
}

////////////////////////


class SuperUser extends User {
    name = 'ufcm';
    password = 'password';
    static createdUsers = [];
    static  canCreateUser = true;

    constructor(name, password) {
        super(name, password);

    }

    getCreatedUsers() {
        let name = super.getCreatedUsers();
        return createdUsers;
    }

    createUser(name, password) {
        const user = new User(name, pass);
        createUser.push(name);
        return user;
    }


}

///////////////////////////////
 //

 const klik = document.getElementsByClassName('klik');
 const text = document.getElementsByClassName('text');
 let originalText = '';
 klik.addEventListener('click', function () {
  if (klik.innerText){
      klik.innerText = '';
  }else{
      klik.innerText = originalText;
  }
     });

///////////////////////

document.getElementsByClassName('first')[0]
.addEventListener('click', function(event) {
    const classList = event.target.classList;
    if (classList.contains('redText')) {
        classList.remove('redText');
    } else {
        classList.add('redText');
    }
});

///////////////////////////////
a.onclick = function (event) {
  event.target.style.backgroundColor = 'red';

  setTimeout(() => {
   alert("black" + event.target.tagName + "i" + this.tagName);
   event.target.style.backgroundColor = '';
    },0);
};



































