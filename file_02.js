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
};

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

console.log(result);








