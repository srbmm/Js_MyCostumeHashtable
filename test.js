function hashFunc(key){//2283 60 2831
    const firstNum = Math.floor((key % 100000) / 10000);
    const secondNum = Math.floor((key % 1000000) / 100000) * 10;
    return firstNum + secondNum;
}

console.log(hashFunc(2283602831))