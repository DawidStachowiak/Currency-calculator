let jsSelect = document.querySelector(".js__select--currency");
let jsForm = document.querySelector(".js-maiForm");
let jsresult__paragraph = document.querySelector(".js-result__paragraph");
let submitButton = document.querySelector(".js-convert__button");
let form__input = document.querySelector(".js-form__input");

jsForm.addEventListener("submit", (event) => {
    {
        event.preventDefault();


        let priceUSD = 3.80;
        let priseEUR = 4.55;
        let priceGBP = 5.23;
        let priceSEK = 0.44;
        let priceCHF = 4.11;
        let currency = jsSelect.value;
        let rates = form__input.value;
        let result;

        switch (currency) {
            case "usd":
                result = (rates / priceUSD).toFixed(2);
                jsresult__paragraph.innerText = "Otrzymasz: " + result;
                break;

            case "eur":
                result = (rates / priseEUR).toFixed(2);
                jsresult__paragraph.innerText = "Otrzymasz: " + result;
                break;

            case "gbp":

                result = (rates / priceGBP).toFixed(2);
                jsresult__paragraph.innerText = "Otrzymasz: " + result;
                break;

            case "sek":

                result = (rates / priceSEK).toFixed(2);
                jsresult__paragraph.innerText = "Otrzymasz: " + result;
                break;

            case "chf":

                result = (rates / priceCHF).toFixed(2);
                jsresult__paragraph.innerText = "Otrzymasz: " + result;
                break;

            default:
                jsresult__paragraph.innerText = "Brak podanego kursu waluty";


        }
    }
});


/////////////////////////////////////////

//var obj;
//const url = "http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json";
//fetch(url)
  //  .then(
    //    response => response.json() // .json(), etc.
        // same as function(response) {return response.text();}
    //).then(
      //  html => obj = mojafunkcja(html)

    //);

//function mojafunkcja(data) {
  //  var cos = data.rates[0].bid;
    //console.log(cos);
//}
