const adultUsers =(users)=>{

    let arrayOlderorEquals18 = []
    
    
    for (var i = 0; i < users.length; i++) {
        if (users[i].age >= 18){
            arrayOlderorEquals18.push(users[i])
        }
        
    }
    return arrayOlderorEquals18
    };
    
    module.exports = adultUsers;
    
    