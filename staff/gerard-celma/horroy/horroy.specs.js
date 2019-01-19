describe('Horroy', function() {

    describe('arguments passed to Horroy constructor function', function() {
        describe('--> SUCCES', function() {
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
        describe('--> FAIL', function() {
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
});