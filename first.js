const myObject = {
    name : "Tahe",
    age : 22,
    job : "student"
}

function logObj(obj){
    
    const name = obj.name;
    let age = obj.age  ;
    let job = obj.job ;
    console.log(`${name} is ${age} and works as an ${job}!`);
    return `${name} is ${age} and works as an ${job}!`;
}

logObj(myObject);
