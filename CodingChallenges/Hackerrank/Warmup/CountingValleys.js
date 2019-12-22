function countingValleys(n, s) {

    let land = 0
    let valley = 0
    for(let i = 0; i< s.length;i++){
    if(s[i]==="U"){
        land++
    }
    if(s[i] ==="D"){
        land --
    }
    if(land === 0 && s[i]==="U"){
        //If you are at 0 elevation and going up i means you will have a valley. 
        valley++
    }
    }
    return valley
    
    
    }
    