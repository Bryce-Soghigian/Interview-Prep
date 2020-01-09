function hourglassSum(arr) {
    /*
    1. Sort the arrays into their hourglasses
    2. Reduce the hourglasses
    3. Compare the results and return the largest
    
    
    */
    //Defining our four hourglasses
    let hour_glass_one = [];
    let hour_glass_two = [];
    let hour_glass_three = [];
    let hour_glass_four = [];
    //========INPUT============
    /*
    
    [1 ,1 ,1, 0 ,0 ,0]
    [0 ,1, 0 ,0, 0, 0]
    [1 ,1 ,1 ,0 ,0 ,0]
    [0 ,0 ,2 ,4 ,4 ,0]
    [0 ,0 ,0 ,2 ,0 ,0]
    [0 ,0 ,1 ,2 ,4 ,0]
    
    
    */
    //Loop through 2D array
    for(let i=0;i<arr.length;i++){
        for(let j = 0; j<arr[i].length;j++){
            //Push the first three values of each subarray into an hourglass arr
            // an hourglass can have a maxlength of 9 before having to move onto the next
            //Push arr[i][0] arr[i][1] arr[i][2] into an hourglass until the array reaches a
            //length of 9 once it reaches a length of 9 move onto another subarray.
            //==================Second half of subarrays=========================
            //Push arr[i][3] arr[i][4] arr[i][5] into the other hourglasses
            if((j===0||j===1||j===2)&&hour_glass_one.length<9){
                hour_glass_one.push(arr[i][j])
            }
            if((j===0||j===1||j===2)&&hour_glass_one.length === 9){
                
                hour_glass_two.push(arr[i][j])
            }
            if((j===3||j===4||j===5)&&hour_glass_three.length<9){
                
                hour_glass_three.push(arr[i][j])
            }
            if((j===3||j===4||j===5)&&hour_glass_three.length===9){
                hour_glass_four.push(arr[i][j])
            }
        }
    }
    hour_glass_two.shift();
    hour_glass_four.shift();
    
    
    //Reducing our four hourglasses
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let test_arr =[1,2,3]
    console.log(test_arr.reduce(reducer),"testing my reducer")
    let glass_one_res = hour_glass_one.reduce(reducer)
    let glass_two_res = hour_glass_two.reduce(reducer);
    let glass_three_res = hour_glass_three.reduce(reducer);
    let glass_four_res = hour_glass_four.reduce(reducer)
    //Pushing results into an array we can sort
    let compare_array = [];
    compare_array.push(glass_one_res,glass_two_res,glass_three_res,glass_four_res)
    //Sorting results
    compare_array.sort((a,b) => a-b)
    //=======DEBUG AREA=========//
    console.log("FIRST",hour_glass_one)
    console.log("second",hour_glass_two)
    console.log("THIRD",hour_glass_three)
    console.log("FOURTH",hour_glass_four)
    console.log("compare_array === ",compare_array)
    
    
    //===========================
    //Returning highest value
    return compare_array[3]
    
    
    }