// program to implement quequ data sturucture

class Quequ{
    constructor(){
        this.items = []
        this.maxSize = 10
    }

    // add element to the queue
    enqueue(element){
        return this.items.push(element)
    }
    // remove element from the queue
    dequeue(){
        if(this.items.length>0){
            return this.items.shift()
        }
    }
    // view the front element
    peek(){
        return this.items.length==0
    }
    // check if the queue is empty
    isEmpty(){
        return this.items.length==0
        
    }
    // check if the queue is full
    isFull(){
        return this.items.length=== this.maxSize
    }






}