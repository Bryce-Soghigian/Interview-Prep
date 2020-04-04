function searchForRange(array, target) {
    // TIme Complexity is O(2n) worst case
    // Write your code here.
      //Have a pointer at the front have a pointer at the back
      // traverse array backwards and forwards and return the result in a 
      //result array

      let result = []
      for(let i= 0;i<array.length;i++){
          if(array[i]===target){
              result.push(i)
              break
          }
          
  }
      for(let i = array.length-1;i>=0;i--){
          if(array[i]===target){
              result.push(i)
              break
          }
      }
  if(result[0]===undefined){
      return [-1,-1]
  }else{
      return result
  }
  }
  
  // Do not edit the line below.
  exports.searchForRange = searchForRange;
  