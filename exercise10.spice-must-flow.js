function spice(startingYield) {
    let yield = startingYield;
    let days = 0;
    let totalSpiceAmount = 0;

    while(yield >= 100){
        days++;
        totalSpiceAmount += yield;
        totalSpiceAmount -= 26;
        yield -= 10;
    }

    if(totalSpiceAmount >= 26){
        totalSpiceAmount -= 26;
    }

    console.log(days);
    console.log(totalSpiceAmount);

}

spice(111);
spice(450);