var JF = require('johnny-five');

var board = new JF.Board();
var threshold = 1;
var max = 150;

board.on("ready", function() {
  var piezoInPin = new JF.Pin({
    pin: 'A0'
  });

  var leds = [
    new JF.Led(9),
    new JF.Led(10),
    new JF.Led(11),
    new JF.Led(12),
    new JF.Led(13),
  ];

  piezoInPin.on('data', function (level) {

    leds.forEach(function(led){
      led.off();
    });

    if(level > threshold) {
      var numOfLedsOn = parseInt(leds.length * (level/20), 10);
      console.log('leds:', numOfLedsOn, 'level ->', level);
      for (var i = 0; i < numOfLedsOn; i++ ) {
        if(leds[i]){
          leds[i].on();
        }
      }
    }
  });
});
