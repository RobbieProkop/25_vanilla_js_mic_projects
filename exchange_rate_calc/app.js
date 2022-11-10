//create dom elements

//functions
const calculate = async (currency) => {
  const res = await fetch(
    `https://v6.exchangerate-api.com/v6/dc7e381b18f065120774ccd1/latest/${currency}`
  );
  console.log("res :>> ", res.json());
};

calculate("USD");
