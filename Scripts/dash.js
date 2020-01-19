
const firebaseConfig = {
    apiKey: "",
    authDomain: "ecofyme-d2e71.firebaseapp.com",
    databaseURL: "https://ecofyme-d2e71.firebaseio.com",
    projectId: "ecofyme-d2e71",
    storageBucket: "ecofyme-d2e71.appspot.com",
    messagingSenderId: "886156484807",
    appId: "1:886156484807:web:c41e29f04e006cc4eedee2",
    measurementId: "G-6T8H21JFBR"
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //Personlize Greeting message:
  function personalGreet(){
    var name = db.collection('Users').data().username;
    document.getElementById("greeting").innerHTML = "Welcome!" + name;
  }

  function findEmail(){
    var email = db.collection('Emails').data().email;
    document.getElementById("email").innerHTML = email
  }

  function findNumber(){
    var email = db.collection('Numbers').data().email;
    document.getElementById("phone number").innerHTML = email;
    
  }



  