function isPalindrome(str) {
    //   console.log(str,"str");
    //   console.log(str.split("").reverse().join(""),"split");
    if(str.split("").reverse().join("") === str){
      return true;
    }else{
      return false;
        }
    }
isPalindrome(NASA)