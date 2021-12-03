
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");
function blogPost(){

}
var formSubmitHandler = function(event){
    event.preventDefault();
    //get value from input Element
    var username = nameInputEl.ariaValueMax.trim();
    
    if(username){
        getUserRepos(username);
        nameInputEl.value ="";
    }else{

    alert("Please enter a GitHub username");
    }
    console.log(event);
};
userFormEl.addEventListener("submit", formSubmitHandler);
// fun thing to add
// setTimeout(function() {
//     // called after 5 seconds, regardless if button was clicked
//     console.log("How is Everything going so Far? Would you like to share how you are feeling?");
//    }, 5000);