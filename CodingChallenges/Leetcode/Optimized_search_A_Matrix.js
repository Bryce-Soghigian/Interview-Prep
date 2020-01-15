var searchMatrix = function(matrix, target) {
    console.log(matrix)
    for(let i = 0;i<matrix.length;i++){
        let length = matrix[i].length;
        let counter = 0
        var guess,
        min = 0,
        max = matrix[i].length -1;
        while(min <= max){
            if(counter === length){
                break
            }
            counter++
            guess = Math.floor((min + max)/2);
            if(matrix[i][guess]===target){
                return true
            }else if(matrix[i][guess]< target){
                min = guess +1
            }else{
                max = guess -1 
            }
        }
        
    
    }
    return false


};