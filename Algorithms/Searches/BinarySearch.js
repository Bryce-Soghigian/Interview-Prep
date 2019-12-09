//Generating Example sorted array to search through
let newArr = [];
for(let i=0;i<12424010;i++){
  newArr.push(i)
}
console.log(newArr.length)

const BinarySearch = (ar,target) => {
let low = 0;
let high = ar.length - 1;

//==============While Loop==================//
while(low <= high){
/*
here we are finding if middle is before or after the target. 
if its before we 

*/
let middle = Math.floor((low + high) / 2);
console.log(middle,"new middle")
if(target>ar[middle]){

  low = middle++
  console.log("low value",low)
}
if(target<ar[middle]){

  high = middle--
  console.log("high value", high)
}
if(middle===target){

  return console.log("found our target which equals ===",target)
}
}
}
BinarySearch(newArr,50000)
/*
Time Complexity O(log(n))

*/
