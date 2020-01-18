function initMap(){
  // Map options
  var options = {
    zoom:8,
    center:{lat:0,lng:0}
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  function getLocation() {
      if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getPosition);
      console.log("location success");

      }
      else{
        console.log("location failed");
      }
  };
  function getPosition(position){
    console.log("run bitch");
    var marker = new google.maps.Marker({
      position:{lat:position.coords.latitude,lng:position.coords.longitude},
      map:map
    });

  };
    getLocation();

  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map

  });



  }