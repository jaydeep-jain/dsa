// create a grapth class
class Graph{
      // defining vettex array and
      // adjacent list
    constructor(noOfvertices) 
    {
       this.noOfvertices = noOfvertices;
        this.AdjList = new Map();
    }
        // add vertex to the graph
      addVertex(v) 
      {
         // intitialize the adjacent list with a
         // null array
         this.AdjList.set(v, []);
       }
      // add edge to the graph
      addEdge(v, w) 
      {
         // get the list for vertex v and put the
         // vettex w denoting ende between v and w
         this.AdjList.get(v).push(w);

         // since graph is undirected
         // add an edge from w to v also
         this.AdjList.get(w).push(v);
         }

          // prints the vertex and adjacency list
          printGraph() 
          {
          // get all the vetices
          var get_keys = this.AdjList.keys();

          // iterate over the vertices
          for(var i of get_keys)
          {

           // great the corresponding adjacency list
           // for the vertex
           var get_values = this.AdjList.get(i);
           var conc = "";
          // iterate over the adjacency list
            // concatenate the values into a string
          for (var j of get_values)
           conc += j + " ";
          // print the vertex and its adjacency list
           console.log(i + " -->" + conc);
         }
    }

   

          // function to perform BFS
           bfs(startingNode)
            {
          // create a visited object

          var visited = {};
          //1st step --> create an object for queue
          var q = new Quequ();

          //2nd step--> add the starting node to the queue

          visited[startingNode] = true;
          q.enqueue(startingNode);

          // 3rd step ---> loop untill queue is empty

          while (!q.isEmpty()) {
         // get the element from the queue
          var getQueueElement = q.dequeue();
          }

          // passing the current vertex to callback function
         console.log(getQueueElement);

         // get the adjacent list for current vertex
         var get_List = this.AdjList.get(getQueueElement);
          // loop through the list and add the element to the
         // queue if it is not processed yet
         for (var i in get_List) {
         var neigh = get_List[i];

          if (!visited[neigh]) {
          visited[neigh] = true;
         q.enqueue(neigh);
        }
      }
    }
  }
}

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

    // the size of the queue 
    size (){
        return this.items.length
    }
    // empty the queue 
    clear (){
        this.items= []
    }

}

// using the above implemented graph class
var g  = new Graph(6)
var vertices = ['A','B','C','D','E','F']


// adding veritces 
for (var i = 0 ;i<vertices.length;i++){
    g.addVertex(vertices[i])
}
// adding edges 
g.addEdge('A','B')
g.addEdge('A','D')
g.addEdge('A','E')
g.addEdge('B','C')
g.addEdge('D','E')
g.addEdge('E','F')
g.addEdge('E','C') 
g.addEdge('C','F')

console.log("BFS");
g.bfs('A')