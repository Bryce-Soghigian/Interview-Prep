function isPalindrome(string) {

	if(string.split("").reverse().join("")===string){
		 return true
		 }else{
		return false
	}
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
