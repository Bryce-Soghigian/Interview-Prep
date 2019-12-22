function fibonacci(n) {
    //Hit two base bases and recurse into a fibonacci sequence
    if(n===1){
        return 1;
    }else if(n===0){
        return 0
    }
    
    
    return fibonacci(n-1)+ fibonacci(n-2)
    
    
    }