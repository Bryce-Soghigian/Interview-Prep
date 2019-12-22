function sockMerchant(n, ar) {
    /*
    Each sock can only be paired with one other sock.
    keep looping through the array searching for pairs
    once you find a match increment the total pairs 
    
    
    
    */
    ar = ar.sort()
    console.log(ar)
    let total = 0;
    for(let i = 0;i<ar.length;i++){
        if(ar[i]===ar[i+1]){
        total++
        i=i+1
        }
    }
    return total;
    
    
    }