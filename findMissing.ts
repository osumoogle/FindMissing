const findMissing = (arr: number[], n: number) => {
    let sum: number = 0;;
    for(let i = 0; i < n; i++){
        if(i < arr.length){
            // xor the number, and the number at index into sum
            sum ^= (i + 1) ^ arr[i];
        }
        else{
            // xor the number, there is no number at index
            sum ^= i + 1;
        }
    }
    return sum;
}

const val = findMissing([1,2,3,4,6,7,8], 8);
console.log(`Missing Number: ${val}`);
