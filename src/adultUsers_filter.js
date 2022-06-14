const adultUsers = (users)=> {

    let userArray = users.filter(individu => individu.age >= 18)
        return userArray;
}
 

module.exports = adultUsers;