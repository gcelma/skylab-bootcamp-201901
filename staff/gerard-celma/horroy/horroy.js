function Horroy() {
    if((arguments.length == 1) && (arguments % 1 !== 0)) throw TypeError('Parameter has to be an integer');
    this.length = this.arguments;

    if(arguments.length)
        for(var i = 0; i < arguments.length; i++)
            this[i] = arguments[i];
};

