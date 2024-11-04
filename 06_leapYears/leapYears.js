const leapYears = function(year) {
    const isDivisibleByFour= year%4 === 0;
    const isCentury= year%100 === 0;
    const isDivisibleByFourHundred= year%400===0;

    if(!isCentury&&isDivisibleByFour||isDivisibleByFourHundred)return true;
    else return false;

};

// Do not edit below this line
module.exports = leapYears;

// year%400 is leap year
// year%100 is not leap year
// year%4 is leapyear