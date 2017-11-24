
var five = require('johnny-five');
var board = new five.Board(); 

board.on('ready', function() {
  
	var d1 = new five.Led(5);
	var d2 = new five.Led(6);
	var d3 = new five.Led(7);
	
	var d4 = new five.Led(9);
	var d5 = new five.Led(10);
	var d6 = new five.Led(11);
	var d7 = new five.Led(12);

	d1.off();
  d2.off();
  d3.off();
  d4.off();
  d5.off();
  d6.off();
  d7.on();

	var sensor = new five.Sensor({
		pin: "A0", 
		freq: 250, 
		threshold: 5
  });
  
  sensor.on("change", () => {
  	var value = sensor.scaleTo(0,9);
  	switch(value) {
  		case 0: 
  		  value = 9;
  			break;
  		case 1: 
  		  value = 8;
  			break;
  		case 2: 
  		  value = 7;
  			break;
  		case 3: 
  		  value = 6;
  			break;
  		case 4: 
  		  value = 5;
  			break;
  		case 5: 
  		  value = 4;
  			break;
  		case 6: 
  		  value = 3;
  			break;
  		case 7: 
  		  value = 2;
  			break;
  		case 8: 
  		  value = 1;
  			break;
  		case 9:
  		  value = 0;
  			break;
  		default:
  		  value = '';
  	}

  	switch(value) {
  		case '': 
  			d1.off();
  			d2.off();
  			d3.off();
  			d4.off();
  			d5.off();
  			d6.off();
  			d7.on();
  			break;
  		case 0:
  			d1.on();
  			d2.on();
  			d3.on();
  			d4.on();
  			d5.on();
  			d6.on();
  			d7.off();
  		  break;
  		case 1:
  			d1.on();
  			d2.off();
  			d3.off();
  			d4.on();
  			d5.off();
  			d6.off();
  			d7.off();
  			break;
  		case 2:
  			d1.off();
  			d2.on();
  			d3.on();
  			d4.on();
  			d5.on();
  			d6.off();
  			d7.on();
  			break;
  		case 3:
  			d1.on();
  			d2.on();
  			d3.off();
  			d4.on();
  			d5.on();
  			d6.off();
  			d7.on();
  			break;
  		case 4:
  			d1.on();
  			d2.off();
  			d3.off();
  			d4.on();
  			d5.off();
  			d6.on();
  			d7.on();
  			break;
  		case 5:
  			d1.on();
  			d2.on();
  			d3.off();
  			d4.off();
  			d5.on();
  			d6.on();
  			d7.on();
  			break;
  		case 6:
  			d1.on();
  			d2.on();
  			d3.on();
  			d4.off();
  			d5.on();
  			d6.on();
  			d7.on();
  			break;
  		case 7:
  			d1.on();
  			d2.off();
  			d3.off();
  			d4.on();
  			d5.on();
  			d6.on();
  			d7.off();
  			break;
  		case 8:
  			d1.on();
  			d2.on();
  			d3.on();
  			d4.on();
  			d5.on();
  			d6.on();
  			d7.on();
  			break;
  		case 9: 
  			d1.on();
  			d2.on();
  			d3.off();
  			d4.on();
  			d5.on();
  			d6.on();
  			d7.on();
  			break;
  	}
    console.log('Moisture sensor value: ' + value);
  });
});

