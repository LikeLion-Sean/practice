const add = (a,b, callback) => { // 기능을 하나 추가
    setTimeout(() => {
        callback(a+b)
    },2000)    
};

add(1,4,(sum) => {
    console.log(sum)
});

function sum_one(a,b){
    return a+b
}

sum_one(1,2);