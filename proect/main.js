var array = [
 {id: 1, name: 'Valera', age: 21, books: ['Harry Potter']},
 {id: 2, name: 'Miha', age: 27, books: ['Lord of the Rings']},
 {id: 3, name: 'Sashka', age: 10, books: ['Kolobok', 'Repka']},
 {id: 4, name: 'Mashka', age: 30, books: ['Sherlok']},
 {id: 5, name: 'Petr', age: 13, books: ['Onegin']},
    ];
let table = document.createElement('table');
document.body.appendChild(table);

// создаем заголовок
let thead = document.createElement('thead');
table.appendChild(thead);
createRow(thead, Object.keys(array[0]), 'header');

// создаем ряды и поменяли цвет
array.forEach(arrElement => {
 createRow(table, Object.values(arrElement), 'row');
});

// создание одного ряда
function createRow(parent, arr, trClass) {
 let tableRowElement = document.createElement('tr');
 tableRowElement.setAttribute('class', trClass);
 parent.appendChild(tableRowElement);
 arr.forEach( value => {
  let cell = document.createElement('td');

  cell.innerHTML = value;
  tableRowElement.appendChild(cell);
 });
}





