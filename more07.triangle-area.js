function triangleArea(sideA, sideB, sideC) {
    let semiperimeter = 1/2 * (sideA + sideB + sideC);
    let area = Math.sqrt(semiperimeter * (semiperimeter -  sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));

    console.log(area);
    
}

triangleArea(3,

5.5,

4);