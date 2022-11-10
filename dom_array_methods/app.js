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

  addData(newUser);
};

//Add new OBJ to data arr
const addData = (obj) => {
  data.push(obj);

  updateDom();
};

// update the dom
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
