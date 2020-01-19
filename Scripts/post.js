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
    const storage = firebase.storage();

    var fileUploadEvent = document.getElementById('fileUpload');

    //check for button click
    fileUploadEvent.addEventListener('change', function(e){

        var file = e.target.files[0];
        var storageRef = storage.ref(file.name);
        var fileName = "" + file.name;
        


        //store image in firebase storage
        storageRef.put(file).then(function() {
            
            //get download url for image and store to firestore
            storage.ref().child(fileName).getDownloadURL().then(function(url) { 
                var Image = document.getElementById('image')
                
                Image.src = url
                Image.className = "resize";

                var Title = document.getElementById('title');

                function getLocation(){
                    if(navigator.geolocation){
                        console.log("run bitch");
                        navigator.geolocation.getCurrentPosition(saveCoords);
                    }
                    else{
                        //error
                        
                    }
                }

                function saveCoords(position){
                    db.collection('Posts').doc().set({
                        title: Title.value,
                        Img: url,
                        Location: {
                            Lat:position.coords.latitude,
                            Lng:position.coords.longitude
                        },
                        hosted: false
                    })
                }
                getLocation();
            })
        

        })

    })


