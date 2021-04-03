function login(){
username = document.getElementById("login").value;
localStorage.setItem("username", username);
window.location = "infinity_room.html";
document.getElementById("login").innerHTML = "";
}