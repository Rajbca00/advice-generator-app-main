

var elQuote = document.getElementById('quote');
var elTitle = document.getElementById('title');


function loadAdvice(){
    var advice_no = Math.floor((Math.random() * 250) + 1);
    console.log(advice_no);
    fetch("https://api.adviceslip.com/advice/"+advice_no)
    .then(response => response.json())
    .then(res=>
        {
            slip = res["slip"];
            console.log(slip);
            elTitle.innerText = "ADVICE #"+slip["id"]
            elQuote.innerText = '"'+slip["advice"]+'"'
        }
    );
}

loadAdvice();