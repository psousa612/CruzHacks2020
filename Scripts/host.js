
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
    
    //auth firebase refs
  const db = firebase.firestore();
    const auth = firebase.auth();

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);


db.collection('Posts').doc(queryString).get().then(doc => {
    document.getElementById('title').innerText = doc.data().title
})

var submit = document.getElementById('enter');

submit.addEventListener('submit', function(e){
    e.preventDefault();
    
    db.collection('Posts').doc(queryString).set( {
        VolunteerNum: 1,
        RemainingSpots: document.getElementById('numReq').value,
        Date: document.getElementById('date').value,
        notes: document.getElementById('notes').value,
        hosted: true
        
    },{merge:true})

}

