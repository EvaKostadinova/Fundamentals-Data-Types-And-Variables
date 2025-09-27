function sumDigits(number){
    let numberAsString = String(number);
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = numberAsString[i];

        sum += Number(currentDigit);
    }

    // или for(let char of numAsString) {
    //       let digit = Number(char);
    //       sum += digit;
    //}

    console.log(sum);
    
}

sumDigits(543);