const removeFromArray = function(array, ...args){
    return array.filter(num=>{
        if(!args.includes(num)) return true;
        return false;
    });}

    const x=[1,23,13,64,74,42,235,6]
    console.log(removeFromArray(x,23,13));
    // const newArr=[];
    //  array.forEach((num)=>{
    //     if(!args.includes(num))return newArr.push(num);
    // });
    // return newArr;
    // }



// Do not edit below this line
module.exports = removeFromArray;
