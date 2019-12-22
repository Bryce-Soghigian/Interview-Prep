function countSwaps(a) {

    let total_swaps = 0
    
        let len = a.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (a[j] > a[j + 1]) {
                    let tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
                    total_swaps++
                }
            }
        }
        let first = a[0];
        let length = a.length
        let last = a[length-1]
        //     Array is sorted in 0 swaps.
    // First Element: 1
    // Last Element: 3
    
        console.log(`Array is sorted in ${total_swaps} swaps.`)
        console.log(`First Element: ${first}`)
        console.log(`Last Element: ${last}`)
    }
//Hackerrank had me write a bubble sort.    