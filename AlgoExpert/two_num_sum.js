function twoNumberSum(array, targetSum) {
	array.sort((a,b) => a-b)//Sorting so we can make a modified binary search
	let left = 0
	let right = array.length - 1;
	while(left<right){
	let current_value = array[left]+ array[right];
		if(current_value == targetSum){
			return [array[left],array[right]]
		}else if(current_value<targetSum){
			left++
		}else if(current_value>targetSum){
			right--
		}
	}
	return []
	
	

}	

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
