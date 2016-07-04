var lat;
var lng;

var getCoords = function(){
	if (Ti.Geolocation.locationServicesEnabled){
		Ti.Geolocation.purpose = "Your location is required for accurate data";
		Ti.Geolocation.getCurrentPosition(function(e) {
			lat = e.coords.latitude;
			lng = e.coords.longitude;

			//console.log(e);
			
			var data = require("data");
			data.latLng(lat, lng);
		});
	} else {
		alert("No location detected!");
	}
};

exports.getCoords = getCoords;


