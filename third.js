function toNumbers(array){
    let numbers = array.map((element) =>array.indexOf(element));
    console.log(numbers);
    return numbers;
}

const letters = ['a', 'b', 'c', 'd'];
toNumbers(letters);