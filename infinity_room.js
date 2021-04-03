function logout(){
localStorage.removeItem("username");
window.location.replace("index.html");
}

var firebaseConfig = {
    apiKey: "AIzaSyAdG5swZZWHEu_Xru0TnuDeTnF92b5F86Q",
    authDomain: "infinity-chat-firebase.firebaseapp.com",
    projectId: "infinity-chat-firebase",
    storageBucket: "infinity-chat-firebase.appspot.com",
    messagingSenderId: "320491659065",
    appId: "1:320491659065:web:cebc264ca82460c3dc52e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
