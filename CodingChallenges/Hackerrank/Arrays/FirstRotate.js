//Rotate the first element to the left
const Rotate_Array_Left = (a,d) => {
    // let temp = [];
    // let length = a.length;
    let n = 0
    while(n<d){
            let first = a.shift();
            a.push(first)
            n++
    }
    return a
    
    }
    let array = [1,2,3,4,5]
    Rotate_Array_Left(array, 2)