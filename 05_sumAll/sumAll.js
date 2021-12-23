const sumAll = function(start , end) {
    let sum=0;
    console.log(typeof(start),typeof(end), typeof(Number()));

    if(typeof(start)!=typeof(Number()) || typeof(end)!=typeof(Number()))
        return "ERROR";
    
    if(start<0 || end<0)
        return "ERROR";

    if(start>end)
    {
        let temp = start;
        start = end;
        end = temp;
    }


    for(let i=start; i<=end; i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
