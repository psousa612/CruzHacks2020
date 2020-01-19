
const firebaseConfig = {
    apiKey: "AIzaSyBh2ky_xnWwRW61N0tmXnM9RnCWsI5D3OA",
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
  var db = firebase.firestore();
  const auth = firebase.auth();

  auth.onAuthStateChanged(user => {
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var ecopts = document.getElementById('ecopts');
      var number = document.getElementById('phoneNum');
      var bio = document.getElementById('bio');


      var usrUID = user.uid
      db.collection('Users').where("UID", "==", usrUID).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          if(doc.data().Name != null){
          name.innerText = doc.data().Name
          }

          if(doc.data().bio != null){
            bio.innerText += ' ' + doc.data().bio
          }

          email.innerText = doc.data().email

          ecopts.innerText += doc.data().Points
          
          if(doc.data().number != null){
            number.innerText = doc.data().number
          }
            



        })
      })
    
    if(user == null){
      console.log("not logged in");
    }
      
  })






  