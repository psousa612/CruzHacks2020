const firebaseConfig = {
    apiKey: "AIzaSyBh2ky_xnWwRW61N0tmXnM9RnCWsI5D3OA",
    authDomain: "eevent-10adf.firebaseapp.com",
    databaseURL: "https://eevent-10adf.firebaseio.com",
    projectId: "eevent-10adf",
    storageBucket: "eevent-10adf.appspot.com",
    messagingSenderId: "691801299872",
    appId: "1:691801299872:web:22c330ae3b6c13f411a2c5",
    measurementId: "G-P2G2BLQNRK"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  //auth firebase refs
  const db = firebase.firestore();
  const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if(user != null)
      window.location.href = "../index.html";
  })
  


const form = document.querySelector('#loginForm');
form.addEventListener('submit', (e)=>{
  
  e.preventDefault();

  const email = form['email-logIn'].value
  const password = form['password-logIn'].value

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    var len = error.message.length;
    if(len != 0){
      alert("Wrong credentials / user doesnt exist");
    }
    //close login modal
    form.reset();

  })
})
  