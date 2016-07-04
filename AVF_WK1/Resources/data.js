//var app = require("app");
//var ui = require("ui");
var geo = require("geo");

geo.getCoords();

var lat;
var lng;

var url = "http://api.wunderground.com/api/cb50b6e75cf1b005/conditions/q/" + lat + "," + lng + ".json";



// var latLng = function(lat, lng){
	// //console.log(latLng);
	// //console.log(lat);
	// url = "http://api.wunderground.com/api/cb50b6e75cf1b005/conditions/q/" + lat + "," + lng + ".json";
	// console.log(url);
// };
 
//latLng(lat, lng);



if (Ti.Network.online === true) {
	var info = Ti.Network.createHTTPClient({
		onload: function(e){
			var json = JSON.parse(this.responseText);
			var shorty = json.current_observation;
			//console.log(json);
			console.log("this is " + url); // why is it undefined?
			
			//ui.buildUi(shorty.display_location.full, shorty.pressure_in, shorty.relative_humidity, shorty.termperature_string, shorty.precip_1hr_string, shorty.wind_dir, shorty.icon);
			
			location.text += shorty.display_location.full;
			pressure.text += shorty.pressure_in;
			humidity.text += shorty.relative_humidity;
			temp.text += shorty.temperature_string;
			precip.text += shorty.precip_1hr_string;
			wind.text += shorty.wind_dir + " " + shorty.wind_mph + " with "+ shorty.wind_gust_mph + " gust (mph)";
			condition.text += shorty.icon.toUpperCase(); 
		}
	});
}else{
	alert("No network found!");
}
info.open("GET", url);
info.send();

//exports.latLng = latLng;
