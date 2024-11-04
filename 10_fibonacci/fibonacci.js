const fibonacci = function(num) {
let fibnum=[0,1];
let givenNum=parseInt(num);
if(givenNum===0)return 0;
if(givenNum<0) return "OOPS";
for(let i=1;i<givenNum;i++){
    lastItem=fibnum.length-1;
    secondToTheLastItem=fibnum.length-2;
    let sum=fibnum[lastItem]+fibnum[secondToTheLastItem];
    fibnum.push(sum);
}
    return fibnum[fibnum.length-1];
};

console.log(fibonacci('0'));

// Do not edit below this line
module.exports = fibonacci;
