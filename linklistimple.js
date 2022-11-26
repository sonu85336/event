
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  // let obj =new Node(200)
  // console.log(obj)  
  class Linkedlist {
    constructor() {
      this.head = null
      this.size = 0;
    }
    ////************/insert at First
    insertfirst(data) {
      this.head = new Node(data, this.head)
      this.size++
    }
    //****************/insert at last 
    inserlast(data) {
      let node = new Node(data)
      let current;
      if (!this.head) {
        this.head = node;
      }
      else {
        current = this.head
  
  
        while (current.next) {
          current = current.next
        }
        current.next = node
      }
      this.size++
    }
    //*********************/insert at index
  insertat(data,index){
    if(index>0&&index>this.size){
      return   ;
    }
    if(index==0){
      this.insertfirst(data)
      return;
    }
    const node = new Node(data)
    let current,prev;
    current = this.head
    let count=0;
    while(count<index){
     prev = current 
      count++
      current = current.next
    }
    node.next = current
    prev.next = node
    this.size++
  }
    //****************/print list data
    printlistdata(){
      let current = this.head;
      while(current){
        console.log(current.data)
        current = current.next
      }
    }
    //***********************/
    getAT(index){
      let current = this.head;
      let count =0;
      while(current){
        if(count==index){
          console.log(current.data)
        }
        count++;
        current = current.next ;
        
      }
      return null;
    }
    //*************************/remove at index
    removeatindex(index){
      if(index>0&&index>this.size){
        return;
      }
      let current = this.head;
      let prev ;
      let count = 0;
      if(index==0){
        this.head = current.next
      }else{
        while(count<index){
          count++
          prev = current ;
          current = current.next
        }
        prev.next = current.next;
      }
      this.size--
    }
    //*********************/clearlist
    clearlist(){
      this.head = null;
      this.size = 0;
    }
    
  }
  ///********************/constructor calling
  let Linked = new Linkedlist()
  Linked.insertfirst(500)
  Linked.insertfirst(100)
  Linked.insertfirst(2200)
  Linked.insertfirst(900)
  Linked.inserlast(1000)
  Linked.inserlast(2000)
  Linked.insertat(3000,5)
   Linked.printlistdata()
    Linked.getAT(1)
  Linked.removeatindex(2)
  Linked.removeatindex(3)
  Linked.removeatindex(1)
   Linked.clearlist()
  console.log(Linked)
  