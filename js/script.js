


{

    const calculateResult = (amount, currency) => {
        const priceUSD = 3.80;
        const priseEUR = 4.55;
        const priceGBP = 5.23;
        const priceSEK = 0.44;
        const priceCHF = 4.11;

        switch (currency) {


            case "usd":
                return amount / priceUSD;



            case "eur":
                return amount / priseEUR;



            case "gbp":

                return amount / priceGBP;



            case "sek":

                return amount / priceSEK;



            case "chf":

                return amount / priceCHF;


        }
    };


    const onFormSubmit = (event) => {
        

            event.preventDefault();

            const jsSelect = document.querySelector(".js__select--currency");
            const jsresultParagraph = document.querySelector(".js-result__paragraph");
            const formInput = document.querySelector(".js-form__input");



            const currency = jsSelect.value;
            const amount = +formInput.value;
            const result = calculateResult(amount, currency);


            jsresultParagraph.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency}</strong>`;
            


        };


    



    const init = () => {

        const jsForm = document.querySelector(".js-maiForm");

        jsForm.addEventListener("submit", onFormSubmit);
    };
    init();

};
