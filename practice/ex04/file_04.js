 pop (15);
function pop (n) {
    for (let i = 0; i < n; i++) {
        setTimeout(() => console.log(i),i * 1000)
    }
}


rec(10);
function rec(n, index = 1) {
    setTimeout(() => {
        alert(index);
        if (index < n) {
            rec(n, index + 1);
        }
    }, index * 1000);

}








function getBoiledWater() {
    console.log('наченаю кипечения');

      return new Promise(function (resolve, reject) {
            setTimeout(function () {
          console.log('вода вскипела');

                resolve('кипяток');
            }, 1000);
        });
    }
    function tia() {
    console.log('сахар');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
          console.log('сладкий');

      }, 2000);
    })

    }

    function addSugar (tea, sugar) {
return new Promise((res,roj) => {
    res (tea + 'чай сахар '+ sugar);
            })
    }

function getSugar() {
    return new Promise((res,roj) =>{
        res('suger')
    })
}

    function makeTea(water){
            if (water !== ' не кипяток') {
                return Promise.reject('мне нужен кипяток');
            }

    console.log('наченаю заваривание');

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('чай готов');

            resolve('кипяток с заваркой');
        }, 5000);
    });
}

    console.log('я дома');

    getBoiledWater()
        .then(function (result) {
            let promiseList =[
                makeTea(result),
                getSugar(),
            ];
            return Promise.all( promiseList );
        })

        .then(function (result) {
            let tae = result[0];
            let suger = result[1];

            return addSugar(tea, sugar);
        })

        .then(function (result) {
            return makeTea(result);
        })

        .then(function (result) {
            return tia(result);
        })

        .then(function (result) {
            console.log(result);
        })

    .catch(function (err) {
  console.error('err');
})
    .finally(function () {
         console.log('Операция закончена');
    });
    console.log('смотрю чериал');





