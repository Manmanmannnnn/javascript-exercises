const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  return arr.reduce((total, currentValue) =>{return  total + currentValue}, 0);
};


const multiply = function(arr) {
return arr.reduce((total,currentValue)=>{return total*currentValue},1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
  let toBeSolved=number;
  let finalAnswer=1;
  if(toBeSolved===0||toBeSolved===1){
    finalAnswer=1
    return finalAnswer;
  }

for(let i=toBeSolved;i>1;i--){ 
  finalAnswer*=i;
} ;
return finalAnswer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
