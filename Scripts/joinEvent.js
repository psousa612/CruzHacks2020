
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
    var eventname = document.getElementById('host-name')
    var volNum = document.getElementById('volunteer-num')
    var remSpot = document.getElementById('spots-left')
    var date = document.getElementById('date-time')
    var note = document.getElementById('host-notes')
    var FullDate = (doc.data().Date).toDate();

    

    eventname.innerHTML += (doc.data().title)
    volNum.innerHTML += (doc.data().VolunteerNum)
    remSpot.innerHTML += (doc.data().RemainingSpots)
    date.innerHTML += (FullDate.getMonth()+1).toString() + "/" + FullDate.getDate().toString()  + "/" +  FullDate.getFullYear().toString() + "  " + FullDate.toLocaleTimeString();
    note.innerHTML += (doc.data().notes)

})