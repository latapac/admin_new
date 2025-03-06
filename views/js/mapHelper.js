var map, infowindow, refreshMarkers;

var refreshRate, requestLocation;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 36.9917074, //19.0760
            lng: -122.0642898 //72.8777
        },
        zoom: 15,
        streetViewControl: false,
        mapTypeControl: false
    });
    infoWindow = new google.maps.InfoWindow;
    setCategories();
    
    google.maps.event.addListener(map, 'bounds_changed', function() {
        clearTimeout(refreshMarkers);
        refreshMarkers = setTimeout(function() {
            setUpMarkers();
        }, 250);
    });
}

function GeoLocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Current Location');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}