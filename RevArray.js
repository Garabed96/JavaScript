// reverseArray takes array as argument and produces a new array that has the same
// elements in the inverse order.

var exampleArray=[1,2,3,4,5,6,7,8,9,10];

function reverseArray(passArr){
    var revArr = [];
    for(let i=passArr.length;i>=0;i--){
        revArr.push(i);
    }        console.log(revArr);
}

reverseArray(exampleArray);

// reverseArrayInPlace