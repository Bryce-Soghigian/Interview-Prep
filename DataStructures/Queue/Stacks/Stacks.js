
var Stack = function() {
    //Init array
    this.elements =[]
};


Stack.prototype.push = function(x) {
    this.elements.push(x)

};


Stack.prototype.pop = function() {
this.elements.pop()

};




Stack.prototype.empty = function() {
    if(this.elements.length === 0){
        return true
    }else{return false}
};



 var stack = new Stack()


