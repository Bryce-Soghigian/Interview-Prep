
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var seen = {};
    let result = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    seen[n] = true;

    while (true) {
     n.toString().split("").map( x => {
        Number(x)
        result.push(Math.pow(x,2))
    })
     n = result.reduce(reducer)   
        
        if (n === 1) {
            return true;
        } else if (seen[n]==="yes") {
            return false;
        } else {
            result = []
            seen[n] = "yes";
        }
    }
}