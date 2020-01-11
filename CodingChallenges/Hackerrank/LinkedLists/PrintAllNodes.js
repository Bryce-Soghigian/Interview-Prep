function printLinkedList(head) {
    let looping = true
while(looping === true){
    console.log(head.data)
    if(head.next != null){
        head = head.next
    }else{
        looping = false
    }
}

}