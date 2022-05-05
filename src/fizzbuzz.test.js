const fizzbuzz = require("./fizzbuzz");

test('should returns Fizz if param is 3 div', ()=> {
//expect
let result = fizzbuzz(6);
expect(result).toBe("Fizz");

});

test('should returns Buzz if param is 5 div', ()=> {
    //expect
    let result = fizzbuzz(10);
    expect(result).toBe("Buzz");
    
});

test('should returns FizzBuzz if param is 3 and 5 div', ()=> {
    //expect
    let result = fizzbuzz(15);
    expect(result).toBe("FizzBuzz");
        
});

test('should return "" if param is not 3 and 5 div', ()=> {
    //expect
    let result = fizzbuzz(2);
    expect(result).toBe(2);
        
});
