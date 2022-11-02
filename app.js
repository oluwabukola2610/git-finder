const github = new Github();
const ui = new UI()
const searUser = document.getElementById("searchUser");
//add event listener
searUser.addEventListener("keyup", (e) => {
  //get inputuser text
  const userText = e.target.value;
  if (userText !== "") {
    //make http
    github
      .getUser(userText)
      //return promises
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //show alert
         ui.showAlert('User not found', 'alert alert-danger');

        } else {
          ///show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
