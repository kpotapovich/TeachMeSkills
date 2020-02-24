var customers = [
    {name: 'Anna', balance: 123, age: 21, alcoholName: 'martini', alcoholCount: 5},
    {name: 'Katia', balance: 110, age: 18, alcoholName: 'rom', alcoholCount: 2},
    {name: 'Kris', balance: 60, age: 15, alcoholName: 'martini', alcoholCount: 1},
    {name: 'Irina', balance: 150, age: 25, alcoholName: 'beer', alcoholCount: 9},
    {name: 'Valeria', balance: 127, age: 30, alcoholName: 'vodka', alcoholCount: 8},
    {name: 'Anastasia', balance: 258, age: 25, alcoholName: 'martini', alcoholCount: 4},
    {name: 'Boris', balance: 203, age: 10, alcoholName: 'viski', alcoholCount: 1},
    {name: 'Elena', balance: 150, age: 26, alcoholName: 'vodka', alcoholCount: 20},
    {name: 'Andrei', balance: 130, age: 35, alcoholName: 'cogniac', alcoholCount: 35},
    {name: 'Valeria', balance: 111, age: 17, alcoholName: 'martini', alcoholCount: 4},
];
const  shopRate = {
  martini:12.3, vodka:8.4, tekilla:15.5, cogniac:20.1, viski:45, rom:50, beer:5
};

customers.forEach(f1);

function f1(customer) {
    if (f2(customer.age)) {
        let totalPrice = f4(customer.alcoholCount, f3(customer.alcoholName));
        if (f5(customer.balance, totalPrice)) {
            customer.balance = customer.balance - totalPrice;
            console.log(`${customer.name}, вот ваш заказ: ${customer.alcoholName} в количестве ${customer.alcoholCount} шт. С вас ${totalPrice} рублей`)
        } else {
            console.log('недостаточно средств');
        }
    }
}

function f2(age) {
    return age >= 18;
}

function f3(alcoholName) {
    return shopRate[alcoholName];
}

function f4(count, pricePerBottle) {
    return count * pricePerBottle;
}

function f5(balance, totalPrice) {
    return balance >= totalPrice;
}


