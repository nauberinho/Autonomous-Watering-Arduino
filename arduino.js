var five = require('johnny-five');
var board = new five.Board();
 
board.on('ready', function() {
  var led = new five.Led(13); // pin 13
  var moisture_sensor = new five.Sensor({
	pin: "A0", 
	freq: 250, 
	threshold: 5
  });

  moisture_sensor.on("change", () => {
    console.log('Sensor value: ', sensor.scaleTo(0, 10));
  });
});