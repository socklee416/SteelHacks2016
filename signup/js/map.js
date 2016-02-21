// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
 
function placeMarkerAndPanTo(latLng, map,flag) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
    if(flag < 0) {

    $("#output").append("<li>" + latLng + "</li>")
    map.panTo(latLng);
    }
}

function randomBetween(min, max) {
    return (Math.random() * (max - min)) + min;
}

function initMap() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    var rand = false;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40.397,
            lng: -79.644
        },
        zoom: 13
    });
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });
    if (sPage == "set_event.html") {
        map.addListener('click', function(e) {
            placeMarkerAndPanTo(e.latLng, map,-1);
        });
    } else if (sPage == "find_free.html") {
        rand = true;
    }
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(pos);
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
            });

            infoWindow.setContent('Location found.');
            map.setCenter(pos);
            if (rand) {
                var i = 0
                while (i < 20) {
                    //populate map with random markers
                    var latLng = {
                        lat: randomBetween(40.40000, 40.49999),
                        lng: randomBetween(-79.999, -79.900)
                    };
                    placeMarkerAndPanTo(latLng, map,1);
                    i++;
                }
            }
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
}
