var namesFruit = [
    {name:'banana', count: 10},
    {name: 'orange', count: 12},
    {name: 'strawberry',count:6},
    {name:'pear', count: 2},
    {name:'cherry', count: 7}
    ];

function f (arr, propertyName) {
    return arr.map(function (item) {
        return item[propertyName];
    })
}

console.log(f(namesFruit, 'name'));


var theBooks = [{name: 'Anna', books: ['Harry Potter', 'War and Peace']},
    {name: 'katia', books: ['Happy together', 'The last word']},
    {name: 'Kris', books: ['Beyond', 'Happiness story']},
    {name: 'Irina', books: ['Сry', 'The dawn of mankind']},
    {name: 'Valeria', books: ['Calm me down', 'The Dragon']},
];

var result = theBooks.map(
    function (item){
        return item.books
    }).reduce(
        function(prev, next){
            return prev.concat(next)
        });

console.log(f(theBooks, 'books'));




function noArgumentsFunction () {
     for(let i=0; i < arguments.length; i++) {
        console.log(typeof arguments[i])
    }
}
noArgumentsFunction(1, true); // "number" "boolean"







// let p= document.createElement('p');
// let p= document.createElement('span');
// let p= document.createElement('h4');
//
// let container = document.getElementByI('container');
// append(p,container);
// append(span,container);
// append(h4,container);
//
// function app (str, text){
//     const element = ['p','span','h4']
//     if(!element.includes(str))
//         return null;
//
//  let newNode = document.createElement(str);
//     if (text) {
//         newNode.innerText=text;
//     }
// return newNode;
// }
// function append(childElement, parentElement) {
//
// }
//
// document.querySelector('#container')
//
// let p = document.createElement('table');
// let p = document.createElement('thead');
// let p = document.createElement('tbody');
//  let container = document.getElementById(container);
//
//
//
//  const  tableEl = document.createElement('table');
// const  tableEl = document.createElement('thead');
// const  tableEl = document.createElement('tbody');
// tableEl.appendChild(tableEl);
// tableEl.appendChild(theadEl);
// document.body.appendChild(tableEl);