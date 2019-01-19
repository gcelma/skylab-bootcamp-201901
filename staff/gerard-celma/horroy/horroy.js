function Horroy() {
    if((arguments.length == 1) && (!(Number.isInteger(arguments[0]))) && (typeof arguments[0] == "number")) {
        throw Error ('Invalid Horroy length');
        return undefined;
    } else if((arguments.length == 1) && (Number.isInteger(arguments[0])) && (arguments[0] == 0)) {
        this.length = 0;
    } else if((arguments.length == 1) && (Number.isInteger(arguments[0]))) {
        this.length = arguments[0];
        if(arguments.length)
        for(var i = 0; i < arguments[0]; i++)
            this[i] = undefined;
    } else {
        this.length = arguments.length;
        if(arguments.length) {
            for(var i = 0; i < arguments.length; i++)
                this[i] = arguments[i];
        }
    }
};

