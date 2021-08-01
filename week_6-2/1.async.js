console.log('Starting'); // 1

setTimeout(() => {
    console.log('2 second Timer') // 2
},2000); // ms

setTimeout(() => { 
    console.log('0') // 3
},0);

console.log('Stop'); // 2
