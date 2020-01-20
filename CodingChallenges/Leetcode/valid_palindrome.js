/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var r = s.toLowerCase().replace(/[^a-z0-9]+/g, '')
    r = r.replace("-", "");
    let split = r.split("")
    
    let reverse = split.reverse().join("")
    console.log(reverse,"reverse")
    console.log(r,"r")
    if(r === reverse){
        return true
    }else{
        return false
    }
    }