//create dom elements
const currency1 = document.getElementById("currency-1");
const currency2 = document.getElementById("currency-2");
const amount1 = document.getElementById("amount-1");
const amount2 = document.getElementById("amount-2");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

//functions
//fetch exchange rates and update UI
const calculate = async () => {
  const currency1Value = currency1.value;
  const currency2Value = currency2.value;

  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/dc7e381b18f065120774ccd1/latest/${currency1Value}`
  );
  const data = await res.json();

  const conversion = data.conversion_rates[currency2Value];

  rate.innerText = `1 ${currency1Value} = ${conversion} ${currency2Value}`;
  amount2.value = (amount1.value * +conversion).toFixed(2);
};

const swapCurrency = (e) => {
  e.preventDefault();
  const temp = currency1.value;
  currency1.value = currency2.value;
  currency2.value = temp;
  calculate();
};

//event listeners
currency1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
currency2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrency);

calculate();
