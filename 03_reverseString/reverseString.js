const reverseString = function(str) {
    // str are immutable so split to array and rejoin

    arr = str.split('');    // default ' '

    let i=0;
    let j=arr.length-1;

    let temp;
    while(i<j){
        // swap
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }

    // console.log(arr);
    str = arr.join('');     // default ','
    return str;
};

// Do not edit below this line
module.exports = reverseString;
