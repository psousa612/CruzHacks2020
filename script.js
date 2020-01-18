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
  const auth = firebase.auth();
  
  
  
  // New map
  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 13
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('You are Here!.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    var thisMarker = new google.maps.Marker({
    
      position:{lat: -68, lng: 20},
      map:map
    })

    db.collection('Posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          var thisMarker = new google.maps.Marker({
      
            position:{lat: doc.data().Location.Lat, lng: doc.data().Location.Lng},
            map:map
          })

      }) 
    })


  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }