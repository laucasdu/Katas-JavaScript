const numArray_filter = require("./numArray_filter");


test('should return array with the numbers divisibles for param num', ()=> {
   let listaNum= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    let num = 2

    let result = numArray_filter(listaNum, num);

    expect(result).toContain(2, 4, 6, 8, 10);

})