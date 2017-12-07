function Taxi(){

    var currentLocationCounter = 1;

    function findLocation(counter){
        switch(counter){
            case 1:
            	return "slot-one-of-nine";
            case 2:
                return "slot-two-of-nine";
            case 3:
                return "slot-three-of-nine";
            case 4:
                return "slot-four-of-nine";
            case 5:
                return "slot-five-of-nine";
            case 6:
                return "slot-six-of-nine";
            case 7:
                return "slot-seven-of-nine";
            case 8:
                return "slot-eight-of-nine";
            case 9:
                return "slot-nine-of-nine";
        }
    };

    function trafficLightLocation(counter){
        switch(counter){
            case 1:
            	return ".one-of-nine";
            case 2:
                return ".two-of-nine";
            case 3:
                return ".three-of-nine";
            case 4:
                return ".four-of-nine";
            case 5:
                return ".five-of-nine";
            case 6:
                return ".six-of-nine";
            case 7:
                return ".seven-of-nine";
            case 8:
                return ".eight-of-nine";
            case 9:
                return ".nine-of-nine";
        }
    };

    this.forward = function(){
        if (currentLocationCounter === 9){
            currentLocationCounter = 0;
        }
        var previousLocation = findLocation(currentLocationCounter);
        var currentLocation = findLocation(++currentLocationCounter);
        moveTaxi(previousLocation, currentLocation);

    }

    this.reverse = function(){
        if (currentLocationCounter === 1){
            var previousLocation = findLocation(1);
            currentLocationCounter = 9;
            var currentLocation = findLocation(currentLocationCounter);
            moveTaxi(previousLocation, currentLocation);
        }
        else{
            var previousLocation = findLocation(currentLocationCounter);
            var currentLocation = findLocation(--currentLocationCounter);
            moveTaxi(previousLocation, currentLocation);
        }
    }

    this.closestTrafficLight = function(){
        var trafficLight = new TrafficLight(currentLocationCounter);
        return trafficLight;
    }
}
