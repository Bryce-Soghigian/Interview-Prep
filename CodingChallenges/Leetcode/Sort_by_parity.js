var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    for(let i = 0; i<A.length;i++){
        if(A[i]%2===0){
            even.push(A[i])
        }else{
            odd.push(A[i])
        }
    }
    console.log(even)
    console.log(odd)
    let total = even.concat(odd)
    return total
};
//Linear runtime