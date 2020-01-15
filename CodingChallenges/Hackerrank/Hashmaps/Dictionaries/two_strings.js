function twoStrings(s1, s2) {
    let hashMap = {};
    for(let i = 0; i< s1.length;i++){
        hashMap[s1[i]] = true;
    }
    console.log(hashMap)
    for(let i=0; i<s2.length;i++){
        if(hashMap[s2[i]]){
            return "YES"
        }
    }
    return "NO"
    }