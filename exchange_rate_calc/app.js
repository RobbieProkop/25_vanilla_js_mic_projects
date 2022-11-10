//create dom elements
const currency1 = document.getElementById("currency-1");
const currency2 = document.getElementById("currency-2");
const amount1 = document.getElementById("amount-1");
const amount2 = document.getElementById("amount-2");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

//functions
const calculate = async (currency) => {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/dc7e381b18f065120774ccd1/latest/${currency}`
  );
  console.log("res :>> ", res.json());
};

calculate("USD");
