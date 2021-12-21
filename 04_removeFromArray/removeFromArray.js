
const removeFromArray = function(arr,...manyArgs) {
    return solnMultipleFirst(arr, ...manyArgs);
    // return solnSecond(arr, num);
    // return solnFirst(arr, num);
};


// remove 1 num only
function solnFirst(arr, num){
    const n = arr.length;

    for(let i=0;i<n;i++){
        if(arr[i]==num){
            console.log(i);
            while(i<n-1){
                arr[i]=arr[i+1];
                
                i++;
            }
            console.log('yyy');
            console.log(arr);
            break;
        }
    }

    // console.log(arr);
    arr = arr.slice(0,n-1);
    return arr;
}


// remove 1 num using splice - mutable method
function solnSecond(arr, num){
    const index = arr.findIndex((ele)=>{
        if(ele==num)
            return true;

        return false;
    });

    if(index==-1)
        return arr;
    else
        arr.splice(index,1);    // delete only 1st occurence

    return arr;
}


function solnMultipleFirst(arr, ...manyArgs){
    
    // rest parameters
    console.log(manyArgs);

    // if signamtue soln(...args)
/*
    arrList = Array.from(arguments);
    // or
    //arrList = [...arguments];

    arr = arrList[0];
*/



    for(arg of manyArgs){
        const index = arr.findIndex((ele)=>{
            if(ele===arg)   // only same type
                return true;
    
            return false;
        });
    
        if(index==-1)
            ;
        else
            arr.splice(index,1); 
    }

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;
