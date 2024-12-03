const start = Date.now();

console.log('starting time...');

setTimeout(() => {
    const millis = Date.now() - start;
    
    console.log(`seconde elapsed = ${Math.floor(millis / 1000)}`);
}, 2000);