function KeyPress(){

    var fnUp,
        fnDown,
        fnLeft,
        fnRight;

    this.up = function(fn){
        fnUp = fn;
    };

    this.down = function(fn){
        fnDown = fn;
    };

    this.left = function(fn){
        fnLeft = fn;
    };

    this.right = function(fn){
        fnRight = fn;
    }

    var body = document.querySelector("body");
    body.onkeydown = function(e){
        //console.log(e.keyCode);
        switch(e.keyCode){
            case 39:
                fnRight()
                break;
            case 37:
                fnLeft()
                break;
            case 38:
                fnUp()
                break;
            case 40:
                fnDown();
                break;
        }
    }
}
