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
  console.log("currency1Value :>> ", currency1Value, currency2Value);
  // const res = await fetch(
  //   `https://v6.exchangerate-api.com/v6/dc7e381b18f065120774ccd1/latest/${currency}`
  // );
  // console.log("res :>> ", res.json());
};

//event listeners
currency1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
currency2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);

calculate("USD");
