import DynamicHashtable from "./DynamicHashtable.js";
// 2283602831
class CHash{
    constructor() {
        this.size = 100;
        this.array = new Array(this.size);
        for(let i = 0; i < this.size; i++){
            this.array[i] = new DynamicHashtable();
        }
    }
    // if you want to change size more than 1000 it's better to change HashFunction
    // all keys has 10 digits
    hashFunc(key){
        let firstNum = key % 10;
        let secondNum = Math.floor((key % 100) / 10);
        const thirdNum = Math.floor((key % 1000) / 100);
        const fourthNum = Math.floor((key % 10000) / 1000);
        firstNum = firstNum + secondNum;
        secondNum = (thirdNum + fourthNum) * 10;
        return ((firstNum + secondNum ) % this.size);
    }
    add(key, value){
        const test = this.hashFunc(key);
        this.array[test].add(key, value);
    }
    find(key){
        return this.array[this.hashFunc(key)].find(key)
    }
    delete(key){
        this.array[this.hashFunc(key)].delete(key);
    }
}
const testHash = new CHash();
const test = 2283602831;
let time1 = new Date();
for(let i = 0; i < 10000000; i++){
    testHash.add(i, "test")
}
let time2 = new Date();
console.log(`first ${time2 - time1}`)
const testHash2 = new DynamicHashtable();
time1 = new Date();
for(let i = 0; i < 10000000; i++){
    testHash2.add(i, "test")
}
time2 = new Date();
console.log(`second ${time2 - time1}`)
const testHash3 = new DynamicHashtable();
testHash3.hashFunc = (key) => {
    let index = (key % this.arraySize) + (i**2)
    while(index >= this.arraySize){
        index -= this.arraySize
    }
    return index
}
time1 = new Date();
for(let i = 0; i < 10000000; i++){
    testHash2.add(i, "test")
}
time2 = new Date();
console.log(`third ${time2 - time1}`)
//testHash.add(2283602831, "Mohammad Sohrabi");
// console.log(testHash.find(9040000))
// time2 = new Date();
// console.log(`first ${time2 - time1}`)
// time1 = new Date();
// console.log(testHash2.find(9040000))
// time2 = new Date();