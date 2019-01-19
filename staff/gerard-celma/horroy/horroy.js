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

Horroy.prototype.push = function(value) {
    if (arguments.length > 1) {
        for(var i = 0; i < arguments.length; i++) {
            this[this.length++] = arguments[i];
        }
    } else {
        this[this.length++] = value;
    }
    
    return this.length;
};

Horroy.prototype.pop = function() {
    if(!this.length) {
        return undefined;
    }
    var poppedValue = this[this.length - 1]
    delete this[this.length-1];
    this.length--;

    return poppedValue;
};

Horroy.prototype.shift = function() {
    var result = this[0];
    for(var i = 0; i<this.length; i++) {
        this[i] = this[i+1];
    };
    delete this[this.length-1];
    this.length--;

    return result;
};