function amazingNumbers(number){
    let numberAsString = String(number); // number.tostring() || number + '';
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        let currentSymbol = numberAsString[i];

        sum += Number(currentSymbol);
    }
    
    let sumAsString = String(sum);

    let isAmazing = false; // let isAmazing = sumAsString.includes('9') - за да спестим долния цикъл

    for(let i = 0; i < sumAsString.length; i++){
        let currentDigit = sumAsString[i];

        if(currentDigit === '9'){
            isAmazing = true;
        }
    }

    if(isAmazing){
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
        
    }

}

amazingNumbers(1233);