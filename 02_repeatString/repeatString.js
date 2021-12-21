const repeatString = function(str,num) {
    if(num<0)
        return "ERROR";
        
    let res=String("");
    for(let i=0;i<num;i++){
        res+=str;
    }

    return res;
};

// Do not edit below this line
module.exports = repeatString;
