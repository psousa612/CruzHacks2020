const firebaseConfig = {
    apiKey: "",
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
  

  

const Form = document.querySelector('#signUpForm');
//Code for the sign up fuctionality
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = Form['email-signup'].value
  const password = Form['password-signup'].value
  const passwordConfirm = Form['password-signup-confirm'].value

  if(password === passwordConfirm){
    firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      Form.reset();
    })
    .catch((error)=>{
      alert(error.message)
    });
  }
  else{
    alert("Passwords didnt match, try again");
  }


 
});
