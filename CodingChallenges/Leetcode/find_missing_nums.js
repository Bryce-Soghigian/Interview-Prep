var findDisappearedNumbers = function(nums) {
    let result = []
    let obj = {};
    for(let i = 1; i < nums.length+1;i++){
      obj[i] = 0
    }

    nums.forEach(num => {
      obj[num] += 1
    })


    for(let i = 0; i < nums.length;i++){
      if(obj[i+1] == 0) {
        result.push(i+1)
      }
    }
    return result
    
};
let arr = [4,3,2,7,8,2,3,1]
findDisappearedNumbers(arr)