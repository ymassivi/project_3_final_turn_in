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


/*pic to slide*/
var slideIndex = 0;
showSlides();

function showSlides() {
  var t;
  var slides = document.getElementsByClassName("mySlides");
  for (t = 0; t < slides.length; t++) {
    slides[t].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
