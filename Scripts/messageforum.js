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
    
    //auth firebase refs
  const db = firebase.firestore();

//loads info from database
db.collection('Posts').doc('VcUCvBoQJEUDGFBV95oB').collection('Chat').orderBy("Time", "desc").get().then((snapshot) => {
snapshot.docs.forEach(doc => {
    let name = document.createElement('span');
    let date = document.createElement('span');
    dateObj = doc.data().Time.toDate();

    name = "" + doc.data().Name;
    date = (dateObj.getMonth()+1).toString() + "/" + dateObj.getDate().toString()  + "/" +  dateObj.getFullYear().toString();
    message = doc.data().Post;
    
    let div = document.getElementById('messagecenter');
    div.innerHTML += (
        '<div class="message mx-auto justify-content-center card mt-3"> <div class="message-title card-header"> <div class="message-name col-sm-2">'+name+'</div> <div class="message-time col-sm-10 text-right">'+date+'</div> </div> <div class="message-body card-body text-left pl-5">'+message+'</div> </div>'
        )
    

}) 
})
