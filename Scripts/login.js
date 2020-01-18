const firebaseConfig = {
    apiKey: "AIzaSyA3N7neUW46vdfApsprb3n3Qd6dyPu95dk",
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
  console.log("hello")
  e.preventDefault();

  const email = form['email-logIn'].value
  const password = form['password-logIn'].value

  auth.signInWithEmailAndPassword(email, password).then(cred => {

    //close login modal
    form.reset();

  })
})
  