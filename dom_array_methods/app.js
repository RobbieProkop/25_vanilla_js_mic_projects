// dom elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show_millionaires");
const sortBtn = document.getElementById("sort");
const calculateBtn = document.getElementById("calculate_wealth");

//Data array
let data = [];

//fetch random user and add money
const getRandomUser = async () => {
  const res = await fetch("https://randomuser.me/api");

  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  if (!main.querySelector("h3")) {
    return addData(newUser);
  }
  addData(newUser);
  calculateTotal();
};

// Double every user's money using MAP
const doubleMoney = () => {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });

  updateDom();
};

// SORT the richest
const sort = () => {
  data = data.sort((a, b) => {
    return b.money - a.money;
  });
  updateDom();
};
// SORT by poorest
const sortReverse = () => {
  data = data.sort((a, b) => {
    return a.money - b.money;
  });
  updateDom();
};

//FILTER
const filterMillionaire = () => {
  data = data.filter((millionaire) => millionaire.money > 999999);
  updateDom();
};

// REDUCE
const calculateTotal = () => {
  let total = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    total
  )}</strong></h3>`;

  main.appendChild(wealthEl);
};

//Add new OBJ to data arr
const addData = (obj) => {
  data.push(obj);

  updateDom();
};

// update the dom FOR EACH
const updateDom = (providedData = data) => {
  // clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const el = document.createElement("div");
    el.classList.add("person");
    el.innerHTML = `<strong>${item.name}</strong> $${formatMoney(item.money)}`;
    main.appendChild(el);
  });
};

// format money properly
const formatMoney = (amount) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

// add event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sort);
sortBtn.addEventListener("dblclick", sortReverse);
showMillionairesBtn.addEventListener("click", filterMillionaire);
calculateBtn.addEventListener("click", calculateTotal);
