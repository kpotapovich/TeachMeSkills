pop (15);
function pop (n) {
    for (let i = 0; i < n; i++) {
        setTimeout(() => console.log(i),i * 1000)
    }
};


rec(10);

function rec(n, index = 1) {
    setTimeout(() => {
        alert(index);
        if (index < n) {
            rec(n, index + 1);
        }
    }, index * 1000);

};