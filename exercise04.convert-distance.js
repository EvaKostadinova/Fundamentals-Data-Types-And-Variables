function convertDistance(meters) {
    let kilometers = meters/1000;

    console.log(`${meters} meters is equal to ${kilometers} kilometers.`);
    console.log(`${kilometers} kilometers is equal to ${(kilometers * 0.621371).toFixed(2)} miles.`);

}

convertDistance(1852);