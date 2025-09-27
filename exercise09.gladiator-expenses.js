function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBreakCount = 0;

    for(let currrentLostFights = 1; currrentLostFights <= lostFightsCount; currrentLostFights++){
        if(currrentLostFights % 2 === 0){
            expenses += helmetPrice;
        }

        if(currrentLostFights % 3 === 0){
            expenses += swordPrice;
        }

        if(currrentLostFights % 2 === 0 && currrentLostFights % 3 === 0){
            expenses += shieldPrice;
            shieldBreakCount++;
        }

        if(shieldBreakCount % 2 === 0 && shieldBreakCount !== 0){
            expenses += armorPrice;
            shieldBreakCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
    

}

gladiatorExpenses(7,

2,

3,

4,

5);
gladiatorExpenses(23,

12.50,

21.50,

40,

200);