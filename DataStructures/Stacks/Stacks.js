const sum = (arr) => {
    let total= 0

if(arr.length === undefined){
    return total
}

total += arr[0]

return sum(arr)
}
let array = [1,2,4,6]
sum(array);