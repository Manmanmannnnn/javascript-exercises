const findTheOldest = function(array) {
    let length=array.length;
    let age=[];
    let birthYear=[];
    const currentYear=new Date().getFullYear();
    for(let i=0;i<array.length;i++){
        age.push((array[i].yearOfDeath||currentYear)-array[i].yearOfBirth);
    }

    let oldestLocation=age.indexOf(Math.max(...age));
    return array[oldestLocation];
};
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
