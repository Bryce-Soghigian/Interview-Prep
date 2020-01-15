var searchMatrix = function(matrix, target) {
    let concat = [];
    for(let i = 0;i<matrix.length;i++){
        let inner = matrix[i]
        for(let j = 0; j< inner.length;j++){
            concat.push(matrix[i][j])
        }
    }
        concat.sort((a,b) => {
            return a-b
        })
        var guess,
            min = 0,
            max = concat.length -1;
            while(min <= max){
                guess = Math.floor((min + max)/2);
                if(concat[guess]===target){
                    return true
                }else if(concat[guess]< target){
                    min = guess +1
                }else{
                    max = guess -1 
                }
            }
        return false
    
    };