var findDuplicates = function(nums) {
    let result = []
let obj = {};
for(let i = 1; i < nums.length+1;i++){
  obj[i] = 0
}

nums.forEach(num => {
  obj[num] += 1
})


for(let i = 0; i < nums.length;i++){
  if(obj[i+1] == 2) {
    result.push(i+1)
  }
}
return result

};