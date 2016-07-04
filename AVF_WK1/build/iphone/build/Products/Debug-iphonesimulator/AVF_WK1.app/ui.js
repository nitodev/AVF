//var app = require("app");

var buildUi = function(location, pressure, humidity, temp, precip, wind, condition) {
	var location = Ti.UI.createLabel({
		top : 50,
		text : location
	});
	var pressure = Ti.UI.createLabel({
		top : 100,
		text : pressure
	});
	var humidity = Ti.UI.createLabel({
		top : 150,
		text : humidity
	});
	var temp = Ti.UI.createLabel({
		top : 200,
		text : temp
	});
	var precip = Ti.UI.createLabel({
		top : 250,
		text : precip
	});
	var wind = Ti.UI.createLabel({
		top : 300,
		text : wind
	});
	var condition = Ti.UI.createLabel({
		top : 350,
		text : condition
	});

	// app.mainWin.add(location);
	// app.mainWin.add(pressure);
	// app.mainWin.add(humidity);
	// app.mainWin.add(temp);
	// app.mainWin.add(precip);
	// app.mainWin.add(wind);
	// app.mainWin.add(condition);
	
	//app.mainWin.open();

};

exports.buildUi = buildUi;
