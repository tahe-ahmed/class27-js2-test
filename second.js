function logNumbers(startNumber,stopNumber){
    let i =0;
    for(i = startNumber;i <= stopNumber; i++){
        if((i%3 == 0) && (i%5 == 0)){
            console.log("FizzBuzz");
        }else if (i%5 == 0){
            console.log("Buzz");
        }else if (i%3 == 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }

}
logNumbers(1, 20);