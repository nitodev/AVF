var mainWin = Ti.UI.createWindow();




var location = Ti.UI.createLabel({
	text : "",
	top : 50,
	font : {
		fontSize : 25
	}

});
var temp = Ti.UI.createLabel({
	text : "",
	top : 100

});
var condition = Ti.UI.createLabel({
	text : "",
	top : 150

});
var precip = Ti.UI.createLabel({
	text : "",
	top : 200

});
var humidity = Ti.UI.createLabel({
	text : "",
	top : 250

});
var wind = Ti.UI.createLabel({
	text : "",
	top : 300

});
var pressure = Ti.UI.createLabel({
	text : "",
	top : 350

});


// var button = Ti.UI.createButton({
	// text: "Refresh",
	// top: 425,
	// font: {
		// fontSize: 20
	// }
// });

//needs revision
//button.addEventListener("click", geo.getCoords()); 




mainWin.add(location);
mainWin.add(temp);
mainWin.add(condition);
mainWin.add(precip);
mainWin.add(humidity);
mainWin.add(wind);
mainWin.add(pressure);
//mainWin.add(button);

mainWin.open();

exports.location = location;
exports.pressure = pressure;
exports.humidity = humidity;
exports.temp = temp;
exports.precip = precip;
exports.wind = wind;
exports.condition = condition;

var data = require("data");


