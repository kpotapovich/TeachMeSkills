

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



















