let arr = [1,2,3,4];

Array.prototype.add = function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i]
    }
    return sum;
}
console.log(arr.add());

Array.prototype.break = function(start,end){
    let arr = [];
    if(end==null){
        end=this.length;
    }
    for(let i=start;i<=end-start;i++){
        arr.push(this[i])
    }

    return arr;
}

console.log(arr.break(1,3))