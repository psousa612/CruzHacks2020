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
  
  // New map
  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 13,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#8189ff'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#96a2ff'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '	#aeb8ff'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
      
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
       // handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    

    db.collection('Posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          var thisMarker = new google.maps.Marker({
      
            position:{lat: doc.data().Location.Lat, lng: doc.data().Location.Lng},
            map:map
          })
          thisMarker.addListener('click', function(e){
            if(!doc.data().hosted){
              infoWindow.setContent('<h1>' + doc.data().title + '</h1>'+'<img src='+doc.data().Img+'height = 40% width=40%'+' >'+'<a href="Pages/host.html?' + doc.id + '"  class="btn btn-light">Host the Event</a>');
            }
            else if(doc.data().hosted){
              infoWindow.setContent('<h1>' + doc.data().title + '</h1>'+'<img src='+doc.data().Img+'height = 40% width=40%'+' >'+'<a href="Pages/join.html?' + doc.id + '" class="btn btn-light">Join the Event</a>')
            }           
            infoWindow.open(map, thisMarker);onclick
          })

      })
    })
  }


  function logout(){
    auth.signOut().then(()=>{
      console.log("logged out");
    })

  }
