function doublyArray(arr,callback) {
    const doubleArr = arr.map((num) => {
        return callback(num);
    });
    return doubleArr;
}

const originalArray = [1, 2, 3, 4];

function callback(num) {
    return num * 2;
}


const doubledArray = doublyArray(originalArray, callback);
console.log(doubledArray);
