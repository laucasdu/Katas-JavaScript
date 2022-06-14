
const adultUsers = require("./adultUsers")

test('whrite a function that receive an objects arrays named users that contains name and age, it should return array with the numbers > 18', ()=> {
    
    let users = [
    {
        name: "Eric",
        age: 21,
    }, 
    {
        name: "Laura",
        age: 35,
    },
    {
        name: "Joel",
        age: 17,
    },
    ]

    let result = adultUsers (users)
    let expected =[{
            name: "Eric",
            age: 21,
        },
        {
            name: "Laura",
            age: 35,
   
    },]

    expect(result).toMatchObject(expected);
})