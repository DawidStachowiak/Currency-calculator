


{

    const calculateResult = (rates, currency) => {
        const priceUSD = 3.80;
        const priseEUR = 4.55;
        const priceGBP = 5.23;
        const priceSEK = 0.44;
        const priceCHF = 4.11;

        switch (currency) {


            case "usd":
                return rates / priceUSD;



            case "eur":
                return rates / priseEUR;



            case "gbp":

                return rates / priceGBP;



            case "sek":

                return rates / priceSEK;



            case "chf":

                return rates / priceCHF;


        }
    };


    const onFormSubmit = (event) => {
        

            event.preventDefault();

            const jsSelect = document.querySelector(".js__select--currency");
            const jsresultParagraph = document.querySelector(".js-result__paragraph");
            const formInput = document.querySelector(".js-form__input");



            const currency = jsSelect.value;
            const rates = +formInput.value;
            const result = calculateResult(rates, currency);


            jsresultParagraph.innerHTML = `${rates.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
            


        };


    



    const init = () => {

        const jsForm = document.querySelector(".js-maiForm");

        jsForm.addEventListener("submit", onFormSubmit);
    };
    init();

};
