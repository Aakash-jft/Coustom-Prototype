let arr = [1,2,3,4];

Array.prototype.add = function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i]
    }
    return sum;
}

console.log(arr.add());