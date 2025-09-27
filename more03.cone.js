function cone(radius, height) {
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let volume = (1/3) * Math.PI * radius * radius * height;
    let totalSurfaceArea = Math.PI * radius * (slantHeight + radius);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}

cone(3,

5);
cone(3.3,

7.8);