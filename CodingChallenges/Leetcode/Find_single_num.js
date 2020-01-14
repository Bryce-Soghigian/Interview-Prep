var singleNumber = function(nums) {
    let set = new Set();
        for(let num of nums){
            if(set.has(num)){
                set.delete(num)
            }else{
                set.add(num)
            }
        }
        return Array.from(set)[0]
    };
    singleNumber([2,2,1,4,4])//Returns 1
    //Linear time