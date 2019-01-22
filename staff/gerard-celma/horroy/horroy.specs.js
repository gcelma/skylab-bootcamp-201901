describe('Horroy', function() {

    describe('--> arguments passed to Horroy constructor function', function() {
        describe('SUCCES', function() {
            it('should create empty Horroy when no arguments', function() {
                var horr = new Horroy;
    
                expect(horr.toString()).toBe({}.toString());
            });
    
            it('should create empty Horroy when 0 passed as argument', function() {
                var horr = new Horroy(0);
    
                expect(horr.toString()).toBe({}.toString());
            });
    
            it('should create Horroy with as many empty positions as the number passed as parameter', function() {
                var horr = new Horroy(5);
    
                expect(horr.toString()).toBe({0: undefined, 1: undefined, 2: undefined, 3: undefined, 4: undefined, length: 5}.toString());
            });

            it('should create Horroy when a string passed as argument', function() {
                var horr = new Horroy("KABOOM");
    
                expect(horr.toString()).toBe({0: "KABOOM", length: 5}.toString());
            });
        });
        describe('FAIL', function() {
            it("shouldn't create Horroy when float passed as argument", function() {
                var error;

                try{
                    new Horroy(1.5);
                }catch(err) {
                    error = err;
                }
               
                expect(error.toString()).toBe('Error: Invalid Horroy length');
            });
        });
    });

    describe('--> push()', function() {
        describe('SUCCES', function() {
            it('should create new position and add new value in horroy', function() {
                var horr = new Horroy(1,2,3);
                var result = horr.push(4);

                expect(result).toBe(4);
            });

            it('should create 2 new positions and add 2 new values in horroy', function() {
                var horr = new Horroy(1,2,3);
                var result = horr.push(4,5);
                
                console.log(horr);
                expect(result).toBe(5);
                expect(horr.toString()).toBe({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, length: 5 }.toString());
            });

        });
    });

    describe('--> pop()', function() {
        describe('SUCCES', function() {
            it('should remove the last element in an array and return it.', function() {
                var horr1 = new Horroy(1,2,3);
                var result1 = horr1.pop();

                expect(result1).toBe(3);
            });
            it('should return undefined if horoy is empty', function() {
                var horr1 = new Horroy();
                var result1 = horr1.pop();

                expect(result1).toBe(undefined);
            });
        });
    });

    describe('--> shift()', function() {
        describe('SUCCES', function() {
            it('should delete and return the first element of an horroy.', function() {
                var horr1 = new Horroy(1,2,3);
                var result1 = horr1.shift();

                expect(result1).toBe(1);
                expect(horr1.toString()).toBe({ 0: 2, 1: 3, length: 2 }.toString());
            });
        });
    });

    describe('--> find()', function() {
        describe('SUCCES', function() {
            it('should return the first value in horroy based in callback condition', function() {
                var horr1 = new Horroy(10,2,30);
                var callback = function(value){if(value>10) { return value}};
                var result1 = horr1.find(callback);

                expect(result1).toBe(30);
            });
        });

        describe('FAIL', function() {
            it('should not allow to pass a callback that is not a function', function() {
                var error;
                var horr1 = new Horroy(10,2,30);
                var value = 5;

                try{
                    horr1.find(value);
                }catch(err) {
                    error = err;
                }
               
                expect(error.toString()).toBe('TypeError: ' + value + ' is not a function');
            });
        });
    });

    describe('--> indexOf()', function() {
        describe('SUCCES', function() {
            it('should return the position of the searched element in the Horroy, without index', function() {
                var horr1 = new Horroy(1,2,3,4,5,6);

                var result = horr1.indexOf(3);

                expect(result).toBe(2);
            });

            it('should return the position of the searched element in the Horroy, with index', function() {
                var horr1 = new Horroy(1,2,3,4,5,6);

                var result = horr1.indexOf(3,0);

                expect(result).toBe(2);
            });
        });
    });

    describe('--> fill()', function() {
        describe('SUCCES', function() {
            it('should return all the postions of the Horroy filled with the desired value', function() {
                var horr1 = new Horroy(1,2,3,4,5,6);

                var result = horr1.indexOf(3);

                expect(result).toBe(2);
            });

            // it('should return the position of the searched element in the Horroy, with index', function() {
            //     var horr1 = new Horroy(1,2,3,4,5,6);

            //     var result = horr1.indexOf(3,0);

            //     expect(result).toBe(2);
            // });
        });
    });
});