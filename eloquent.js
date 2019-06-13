// var readline = require('readline');
//
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


function myRange(start, end){
    var final =[];
    for(var i=start;i<end+1;i++){
        // final[i] = i;
        final.push(i);
        console.log(i);
    }
    console.log("This is the final output: "+final);
    return final;
}

function rangeNeg(start, end, step){
    var final = [];
    for(var i=start;i<end+1;i++){
        if((i % step) === 0){
            final.push(i);
        }
    }console.log("This is the final rangeNeg: " + final);
    return final;
}

rangeNeg(5, 50, 5);

// myRange(10, 50);

const anArray = [1,2,3,4,5,6,7,8,9,10];
// myReductionSum(anArray);


function myReductionSum(anArray){
    var myAA = 0;

    for(let i=anArray[0];i<anArray.length; i++){
        console.log(anArray[i])
        myAA = myAA + anArray[i];
    }
    console.log(myAA);
    return myAA;
}


// var myArr = [1, 4, 6, 253, 3,52,532,5,2, 5];

// function mySlicing(){
//     console.log(myArr.slice(3));
//     return myArr.slice(3);
// }

// console.log(myArr.slice(3));