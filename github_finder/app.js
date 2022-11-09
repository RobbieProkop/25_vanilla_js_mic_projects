// main app file

//initialize
const github = new GitHub();
const ui = new UI();

// Search INput
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;

  if (!userText) {
    return ui.clearProfile();
  }
  // Make HTTP call
  github.getUser(userText).then((data) => {
    console.log("data", data);
    if (data.profile.message === "Not Found") {
      //Show Alert
      ui.showAlert("User not found", "alert alert-danger");
    }
    //Show Profile
    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
  });

  //Clear Profile
  ui.clearProfile();
});
