// Complete the hourglassSum function below.
function hourglassSum(arr) {
    /*
    loop through array and find the sum of all the hourglasses.
    push those sums to a compare array
    return the highest sum
    
    */
    //Defining our four hourglasses
    
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
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let temp_sum =0;
    let compare_array = []
    
    for(let i=0;i<=3;i++){
        for(let j = 0; j<=3;j++){
            //make an hourglass
            //add up that hourglass
            //push the total to the compare_array
              temp_sum += arr[i][j];
              temp_sum += arr[i][j + 1];
              temp_sum += arr[i][j + 2];
              temp_sum += arr[i + 1][j + 1];
              temp_sum += arr[i + 2][j]; 
              temp_sum += arr[i + 2][j + 1];
              temp_sum += arr[i + 2][j + 2];
            compare_array.push(temp_sum)
            temp_sum = 0;
        }
    }
    
    //Sorting results and returning the highest one
    compare_array.sort((a,b) =>  a-b)
    let final_index = compare_array.length -1;
    return compare_array[final_index]
    
    }