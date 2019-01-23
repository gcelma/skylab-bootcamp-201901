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

Horroy.prototype.find = function(callback) {
    if (arguments.length > 1) throw Error('too many arguments');
    if(!(callback instanceof Function)) throw TypeError(callback + ' is not a function');

    for(var i = 0; i<this.length; i++) {
        var value = this[i];


        if(callback(value)) return value;
    }
};

Horroy.prototype.indexOf = function(value,index) {
    
    if(!index) {
        for(var i=0; i<this.length; i++) {
            if(value === this[i]) {
                return i;
            }
        }
        return -1;
    } else if(index) {
        if(typeof index !== Number) throw TypeError('the index should be a number');
        for( var i = index; i<this.length; i++) {
            if(value === this[i]) {
                return i;
            }
        }
        return -1;
    }
};

Horroy.prototype.fill = function(value,start,end) {
    if (arguments.length > 3) throw Error('too many arguments');
    
    start = start === undefined ? 0 : (start < 0 ? this.length + start : start);
    end = end === undefined ? this.length : (end < 0 ? this.length + end : end);

    for (var i = start; i < end; i++)
        this[i] = value;

    return this;
};

Horroy.prototype.filter = function(callback) {
    if(!(callback instanceof Function)) throw TypeError(callback + ' is not a function');

     var result = new Horroy;

     for (var i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            result[result.length] = this[i];
        }
    }
    return result;
};