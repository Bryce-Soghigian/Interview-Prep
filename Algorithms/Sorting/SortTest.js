let arr = [1,8,5,3,2,7,87,13]

const sort = (array) => {
let counter = 0
let new_arr = []
while(counter !== array.length){
  let value = Math.max(array)
  new_arr.push(value)
  counter++
}
return new_arr
}

sort(arr)