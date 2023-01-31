hashFunc(key){
    console.log(key)
    let firstNum = key % 10;
    let secondNum = Math.floor((key % 100) / 10);
    const thirdNum = Math.floor((key % 1000) / 100);
    const fourthNum = Math.floor((key % 10000) / 1000);
    firstNum = firstNum + secondNum;
    secondNum = (thirdNum + fourthNum) * 10;
    return ((firstNum + secondNum ) % this.size);
}