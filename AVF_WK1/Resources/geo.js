

var getCoords = function(){
	if (Ti.Geolocation.locationServicesEnabled){
		Ti.Geolocation.purpose = "Your location is required for accurate data";
		Ti.Geolocation.getCurrentPosition(function(e) {
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			// console.log(lng);

			console.log(e);
			
			var data = require("data");
			// data.latLng(lat, lng);
			data.lat = lat;
			data.lng = lng;
		});
	} else {
		alert("No location detected!");
	}
};

exports.getCoords = getCoords;



