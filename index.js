var body = document.querySelector("body");

var displayMessage = function(text) {
    var message = document.getElementById("message");
    message.innerHTML = text;
};
var taxi = new Taxi();
var keyPress = new KeyPress();
// var trafficLight = new TrafficLight();

keyPress.right(function() {
    var tl = taxi.closestTrafficLight();
    if (tl.currentColor() !== "red") {
        taxi.forward();
        displayMessage('Going Foward!');
    };
});

keyPress.left(function() {
    var tl = taxi.closestTrafficLight();
    if (tl.currentColor() !== "red") {
        taxi.reverse();
        displayMessage('Going Back!');
    };
});

keyPress.up(function() {
    var tl = taxi.closestTrafficLight();

    if (tl.currentColor() === "green") {
        tl.makeOrange();
        displayMessage('Caution!');
    } else if (tl.currentColor() === "orange") {
        tl.makeRed();
        displayMessage('Stop!');
    } else {
        tl.makeGreen();
        displayMessage('Go!');
    }
});

keyPress.down(function() {
    var tl = taxi.closestTrafficLight();
    if (tl.currentColor() === "red") {
        tl.makeGreen();
        displayMessage('Go!');
    } else if (tl.currentColor() === "green") {
        tl.makeOrange();
        displayMessage('Caution!');
    } else {
        tl.makeRed();
        displayMessage('Stop!');
    }
});

// body.onkeydown = function(e) {
//
//     if (e.keyCode === 39) {
//         var tl = taxi.closestTrafficLight();
//         if (tl.currentColor() !== "red") {
//             taxi.forward();
//             displayMessage('Going Foward!');
//         }
//     }
//     if (e.keyCode === 37) {
//         var tl = taxi.closestTrafficLight();
//         if (tl.currentColor() !== "red") {
//             taxi.reverse();
//             displayMessage('Going Back!');
//         }
//     } else if (e.keyCode === 38) {
        // var tl = taxi.closestTrafficLight();
        //
        // if (tl.currentColor() === "green") {
        //     tl.makeOrange();
        //     displayMessage('Caution!');
        // } else if (tl.currentColor() === "orange") {
        //     tl.makeRed();
        //     displayMessage('Stop!');
        // } else {
        //     tl.makeGreen();
        //     displayMessage('Go!');
        // }
//     } else if (e.keyCode === 40) {
        // var tl = taxi.closestTrafficLight();
        // if (tl.currentColor() === "red") {
        //     tl.makeGreen();
        //     displayMessage('Go!');
        // } else if (tl.currentColor() === "green") {
        //     tl.makeOrange();
        //     displayMessage('Caution!');
        // } else {
        //     tl.makeRed();
        //     displayMessage('Stop!');
        // }
//     }
// }
