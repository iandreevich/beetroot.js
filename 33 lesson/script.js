let geocoder;
let map;
let start = document.getElementById("start");
let end = document.getElementById("end");
let address = start.value;

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -34.397, lng: 150.644 },
  });
  directionsRenderer.setMap(map);
  geocoder = new google.maps.Geocoder();
  codeAddress(geocoder, map, address);

  let btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
  directionsService.route(
    {
      origin: {
        query: start.value,
      },
      destination: {
        query: end.value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Запрос маршрутов не удался из-за: " + status);
      }
    }
  );
};

const codeAddress = (geocoder, map, address) => {
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
      });
    } else {
      alert("Геокод некорректен по причине: " + status);
    }
  });
};
