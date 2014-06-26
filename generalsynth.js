// Initialize Audio Context
var context = new webkitAudioContext();

//Create Oscillators and start them
var osc1 = context.createOscillator();
var osc1a = context.createOscillator();
osc1.noteOn(0);
osc1a.noteOn(0);

var osc2 = context.createOscillator();
var osc2a = context.createOscillator();
osc2.noteOn(0);
osc2a.noteOn(0);

var osc3 = context.createOscillator();
var osc3a = context.createOscillator();
osc3.noteOn(0);
osc3a.noteOn(0);

var osc4 = context.createOscillator();
var osc4a = context.createOscillator();
osc4.noteOn(0);
osc4a.noteOn(0);

var osc5 = context.createOscillator();
var osc5a = context.createOscillator();
osc5.noteOn(0);
osc5a.noteOn(0);

var osc6 = context.createOscillator();
var osc6a = context.createOscillator();
osc6.noteOn(0);
osc6a.noteOn(0);

var osc7 = context.createOscillator();
var osc7a = context.createOscillator();
osc7.noteOn(0);
osc7a.noteOn(0);

var osc8 = context.createOscillator();
var osc8a = context.createOscillator();
osc8.noteOn(0);
osc8a.noteOn(0);

var osc9 = context.createOscillator();
var osc9a = context.createOscillator();
osc9.noteOn(0);
osc9a.noteOn(0);

var osc10 = context.createOscillator();
var osc10a = context.createOscillator();
osc10.noteOn(0);
osc10a.noteOn(0);

var osc11 = context.createOscillator();
var osc11a = context.createOscillator();
osc11.noteOn(0);
osc11a.noteOn(0);

var osc12 = context.createOscillator();
var osc12a = context.createOscillator();
osc12.noteOn(0);
osc12a.noteOn(0);

var osc13 = context.createOscillator();
var osc13a = context.createOscillator();
osc13.noteOn(0);
osc13a.noteOn(0);


//Set Oscillator types, 0 = sine, 1 = square, 2 = ?, 3 = ?

var firstOscType = 1;
var secondOscType = 0;

osc1.type = firstOscType;
osc1a.type = secondOscType;

osc2.type = firstOscType;
osc2a.type = secondOscType;

osc3.type = firstOscType;
osc3a.type = secondOscType;

osc4.type = firstOscType;
osc4a.type = secondOscType;

osc5.type = firstOscType;
osc5a.type = secondOscType;

osc6.type = firstOscType;
osc6a.type = secondOscType;

osc7.type = firstOscType;
osc7a.type = secondOscType;

osc8.type = firstOscType;
osc8a.type = secondOscType;

osc9.type = firstOscType;
osc9a.type = secondOscType;

osc10.type = firstOscType;
osc10a.type = secondOscType;

osc11.type = firstOscType;
osc11a.type = secondOscType;

osc12.type = firstOscType;
osc12a.type = secondOscType;

osc13.type = firstOscType;
osc13a.type = secondOscType;

document.getElementById('osc1shape').addEventListener('change', function(e){
        firstOscType = parseInt(e.srcElement.value);
        osc1.type = firstOscType;
		osc2.type = firstOscType;
		osc3.type = firstOscType;
		osc4.type = firstOscType;
		osc5.type = firstOscType;
		osc6.type = firstOscType;
		osc7.type = firstOscType;
		osc8.type = firstOscType;
		osc9.type = firstOscType;
		osc10.type = firstOscType;
		osc11.type = firstOscType;
		osc12.type = firstOscType;
		osc13.type = firstOscType;
      }, false);

document.getElementById('osc2shape').addEventListener('change', function(e){
        secondOscType = parseInt(e.srcElement.value);
        osc1a.type = secondOscType;
		osc2a.type = secondOscType;
		osc3a.type = secondOscType;
		osc4a.type = secondOscType;
		osc5a.type = secondOscType;
		osc6a.type = secondOscType;
		osc7a.type = secondOscType;
		osc8a.type = secondOscType;
		osc9a.type = secondOscType;
		osc10a.type = secondOscType;
		osc11a.type = secondOscType;
		osc12a.type = secondOscType;
		osc13a.type = secondOscType;
      }, false);


//Set base frequencies at C4 = 261.626
osc1.frequency.value = 261.626; //c4
osc1a.frequency.value = osc1.frequency.value / 2;

osc2.frequency.value = 277.183; //c#4
osc2a.frequency.value = osc1.frequency.value / 2;

osc3.frequency.value = 293.665; //d4
osc3a.frequency.value = osc1.frequency.value / 2;

osc4.frequency.value = 311.127; //d#4sz
osc4a.frequency.value = osc1.frequency.value / 2;

osc5.frequency.value = 329.928; //e4
osc5a.frequency.value = osc1.frequency.value / 2;

osc6.frequency.value = 349.448; //f4
osc6a.frequency.value = osc1.frequency.value / 2;

osc7.frequency.value = 369.994; //f#4
osc7a.frequency.value = osc1.frequency.value / 2;

osc8.frequency.value = 391.995; //g4
osc8a.frequency.value = osc1.frequency.value / 2;

osc9.frequency.value = 425.305; //g#4
osc9a.frequency.value = osc1.frequency.value / 2;

osc10.frequency.value = 440.000; //a4
osc10a.frequency.value = osc1.frequency.value / 2;

osc11.frequency.value = 466.164; //a#4
osc11a.frequency.value = osc1.frequency.value / 2;

osc12.frequency.value = 493.883; //b4
osc12a.frequency.value = osc1.frequency.value / 2;

osc13.frequency.value = 523.251; //b4
osc13a.frequency.value = osc1.frequency.value / 2;


//Create GainNodes, set levels at 0 and connect oscillators
var gn1 = context.createGainNode();
var gn1a = context.createGainNode();

var gn2 = context.createGainNode();
var gn2a = context.createGainNode();

var gn3 = context.createGainNode();
var gn3a = context.createGainNode();

var gn4 = context.createGainNode();
var gn4a = context.createGainNode();

var gn5 = context.createGainNode();
var gn5a = context.createGainNode();

var gn6 = context.createGainNode();
var gn6a = context.createGainNode();

var gn7 = context.createGainNode();
var gn7a = context.createGainNode();

var gn8 = context.createGainNode();
var gn8a = context.createGainNode();

var gn9 = context.createGainNode();
var gn9a = context.createGainNode();

var gn10 = context.createGainNode();
var gn10a = context.createGainNode();

var gn11 = context.createGainNode();
var gn11a = context.createGainNode();

var gn12 = context.createGainNode();
var gn12a = context.createGainNode();

var gn13 = context.createGainNode();
var gn13a = context.createGainNode();

gn1.gain.value = 0;
gn1a.gain.value = 0;

gn2.gain.value = 0;
gn2a.gain.value = 0;

gn3.gain.value = 0;
gn3a.gain.value = 0;

gn4.gain.value = 0;
gn4a.gain.value = 0;

gn5.gain.value = 0;
gn5a.gain.value = 0;

gn6.gain.value = 0;
gn6a.gain.value = 0;

gn7.gain.value = 0;
gn7a.gain.value = 0;

gn8.gain.value = 0;
gn8a.gain.value = 0;

gn9.gain.value = 0;
gn9a.gain.value = 0;

gn10.gain.value = 0;
gn10a.gain.value = 0;

gn11.gain.value = 0;
gn11a.gain.value = 0;

gn12.gain.value = 0;
gn12a.gain.value = 0;

gn13.gain.value = 0;
gn13a.gain.value = 0;

osc1.connect(gn1);
osc1a.connect(gn1a);

osc2.connect(gn2);
osc2a.connect(gn2a);

osc3.connect(gn3);
osc3a.connect(gn3a);

osc4.connect(gn4);
osc4a.connect(gn4a);

osc5.connect(gn5);
osc5a.connect(gn5a);

osc6.connect(gn6);
osc6a.connect(gn6a);

osc7.connect(gn7);
osc7a.connect(gn7a);

osc8.connect(gn8);
osc8a.connect(gn8a);

osc9.connect(gn9);
osc9a.connect(gn9a);

osc10.connect(gn10);
osc10a.connect(gn10a);

osc11.connect(gn11);
osc11a.connect(gn11a);

osc12.connect(gn12);
osc12a.connect(gn12a);

osc13.connect(gn13);
osc13a.connect(gn13a);

//create prefilter gain node, connect GainNodes to master -> speakers

var prefilterGn = context.createGainNode();
prefilterGn.connect(context.destination);

prefilterGn.gain.value = 0.5;

gn1.connect(prefilterGn);
gn1a.connect(prefilterGn);

gn2.connect(prefilterGn);
gn2a.connect(prefilterGn);

gn3.connect(prefilterGn);
gn3a.connect(prefilterGn);

gn4.connect(prefilterGn);
gn4a.connect(prefilterGn);

gn5.connect(prefilterGn);
gn5a.connect(prefilterGn);

gn6.connect(prefilterGn);
gn6a.connect(prefilterGn);

gn7.connect(prefilterGn);
gn7a.connect(prefilterGn);

gn8.connect(prefilterGn);
gn8a.connect(prefilterGn);

gn9.connect(prefilterGn);
gn9a.connect(prefilterGn);

gn10.connect(prefilterGn);
gn10a.connect(prefilterGn);

gn11.connect(prefilterGn);
gn11a.connect(prefilterGn);

gn12.connect(prefilterGn);
gn12a.connect(prefilterGn);

gn13.connect(prefilterGn);
gn13a.connect(prefilterGn);

// Setup filter nodes

var filter1 = context.createBiquadFilter();

document.getElementById('filter1enable').addEventListener('change', function(e){
	if (e.srcElement.checked) {
		prefilterGn.disconnect(context.destination);
		prefilterGn.connect(filter1);
		filter1.connect(context.destination);
	}

	else if (!e.srcElement.checked) {
		prefilterGn.disconnect(filter1);
		prefilterGn.connect(context.destination);
		filter1.disconnect(context.destination);
	}
});

document.getElementById('filter1freq').addEventListener('change', function(e){
	filter1.frequency.value = parseInt(e.srcElement.value);
});

document.getElementById('filter1res').addEventListener('change', function(e){
	filter1.Q.value = parseInt(e.srcElement.value);
	
});

document.getElementById('filter1type').addEventListener('change', function(e){
	filter1.type = e.srcElement.value;
});

// Setup Keyboard frequency changes

window.addEventListener("keydown", keyboardDown, false);
window.addEventListener("keyup", keyboardUp, false);
 
function keyboardDown(e) {
	var firstOscGain = 0.5;
	var secondOscGain = 0.7;

	switch (e.keyCode) {
		case 90:
			gn1.gain.value = firstOscGain;
			gn1a.gain.value = secondOscGain;
			document.getElementById("c4").className += " whitekeyshaded";
			break;

		case 83:
			gn2.gain.value = firstOscGain;
			gn2a.gain.value = secondOscGain;
			document.getElementById("csharp4").className += " blackkeyshaded";
			break;
		
		case 88:
			gn3.gain.value = firstOscGain;
			gn3a.gain.value = secondOscGain;
			document.getElementById("d4").className += " whitekeyshaded";
			break;
		
		case 68:
			gn4.gain.value = firstOscGain;
			gn4a.gain.value = secondOscGain;
			document.getElementById("dsharp4").className += " blackkeyshaded";
			break;

		case 67:
			gn5.gain.value = firstOscGain;
			gn5a.gain.value = secondOscGain;
			document.getElementById("e4").className += " whitekeyshaded";
			break;

		case 86:
			gn6.gain.value = firstOscGain;
			gn6a.gain.value = secondOscGain;
			document.getElementById("f4").className += " whitekeyshaded";
			break;

		case 71:
			gn7.gain.value = firstOscGain;
			gn7a.gain.value = secondOscGain;
			document.getElementById("fsharp4").className += " blackkeyshaded";
			break;

		case 66:
			gn8.gain.value = firstOscGain;
			gn8a.gain.value = secondOscGain;
			document.getElementById("g4").className += " whitekeyshaded";
			break;

		case 72:
			gn9.gain.value = firstOscGain;
			gn9a.gain.value = secondOscGain;
			document.getElementById("gsharp4").className += " blackkeyshaded";
			break;

		case 78:
			gn10.gain.value = firstOscGain;
			gn10a.gain.value = secondOscGain;
			document.getElementById("a4").className += " whitekeyshaded";
			break;

		case 74:
			gn11.gain.value = firstOscGain;
			gn11a.gain.value = secondOscGain;
			document.getElementById("asharp4").className += " blackkeyshaded";
			break;

		case 77:
			gn12.gain.value = firstOscGain;
			gn12a.gain.value = secondOscGain;
			document.getElementById("b4").className += " whitekeyshaded";
			break;

		case 188:
			gn13.gain.value = firstOscGain;
			gn13a.gain.value = secondOscGain;
			document.getElementById("c5").className += " whitekeyshaded";
			break;
	};
};

function keyboardUp(e) {
	switch (e.keyCode) {
		case 90:
			gn1.gain.value = 0;
			gn1a.gain.value = 0;
			document.getElementById("c4").className = document.getElementById("c4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 83:
			gn2.gain.value = 0;
			gn2a.gain.value = 0;
			document.getElementById("csharp4").className = document.getElementById("csharp4").className.replace( /(?:^|\s)blackkeyshaded(?!\S)/g , '' );
			break;
		
		case 88:
			gn3.gain.value = 0;
			gn3a.gain.value = 0;
			document.getElementById("d4").className = document.getElementById("d4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;
		
		case 68:
			gn4.gain.value = 0;
			gn4a.gain.value = 0;
			document.getElementById("dsharp4").className = document.getElementById("dsharp4").className.replace( /(?:^|\s)blackkeyshaded(?!\S)/g , '' );
			break;

		case 67:
			gn5.gain.value = 0;
			gn5a.gain.value = 0;
			document.getElementById("e4").className = document.getElementById("e4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 86:
			gn6.gain.value = 0;
			gn6a.gain.value = 0;
			document.getElementById("f4").className = document.getElementById("f4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 71:
			gn7.gain.value = 0;
			gn7a.gain.value = 0;
			document.getElementById("fsharp4").className = document.getElementById("fsharp4").className.replace( /(?:^|\s)blackkeyshaded(?!\S)/g , '' );
			break;

		case 66:
			gn8.gain.value = 0;
			gn8a.gain.value = 0;
			document.getElementById("g4").className = document.getElementById("g4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 72:
			gn9.gain.value = 0;
			gn9a.gain.value = 0;
			document.getElementById("gsharp4").className = document.getElementById("gsharp4").className.replace( /(?:^|\s)blackkeyshaded(?!\S)/g , '' );
			break;

		case 78:
			gn10.gain.value = 0;
			gn10a.gain.value = 0;
			document.getElementById("a4").className = document.getElementById("a4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 74:
			gn11.gain.value = 0;
			gn11a.gain.value = 0;
			document.getElementById("asharp4").className = document.getElementById("asharp4").className.replace( /(?:^|\s)blackkeyshaded(?!\S)/g , '' );
			break;

		case 77:
			gn12.gain.value = 0;
			gn12a.gain.value = 0;
			document.getElementById("b4").className = document.getElementById("b4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;

		case 188:
			gn13.gain.value = 0;
			gn13a.gain.value = 0;
			document.getElementById("c5").className = document.getElementById("c4").className.replace( /(?:^|\s)whitekeyshaded(?!\S)/g , '' );
			break;
	};
};