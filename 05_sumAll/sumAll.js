const sumAll = function(start,end) {
    let totalSum=0;
    if(start<0||end<0||!Number.isInteger(start)||!Number.isInteger(end))return "ERROR";
    if(start<end){
    for(let i=start;i<=end;i++){
        totalSum+=i;
    }
}
else if(start>end){
    for(let i=end;i<=start;i++){
        totalSum+=i;
    }
}

    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
