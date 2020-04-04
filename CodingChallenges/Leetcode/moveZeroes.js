
var moveZeroes = function(nums) {
    let counter = 0
 //count zeroes
 nums.map((x,i) => {
   
   if(x === 0){
     counter++
    }
 })
 console.log(counter,"total zeros")

 //Remove zeros from array
 nums = nums.filter(val => val !== 0);
 //push new zeroes onto the array
 for(let i = 0;i<counter;i++){
     nums.push(0)
 }


return nums
};
moveZeroes([0,1,0,3,12])