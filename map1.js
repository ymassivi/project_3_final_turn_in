function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat:4.896318, lng: -36.129691},
          mapTypeId: 'terrain'
        });
        var flightPlanCoordinates = [
          {lat:-33.968777, lng: 18.597153},
          {lat:49.009754, lng: 2.548000},
          {lat: 25.797194, lng: -80.259822},
          {lat:-33.968777, lng: 18.597153}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(map);  
      }

