// function to perform BFS
bfs(startingNode)
{

    // create a visited object

    var visited = {}
    //1st step --> create an object for queue 
    var q = new Quequ();
    
    //2nd step--> add the starting node to the queue

    visited [startingNode] = true
    q.enqueue(startingNode)

    // 3rd step ---> loop untill queue is empty

    while(!q.isEmpty()){
        // get the element from the queue
        var getQueueElement = q.dequeue()
    }

    // passing the current vertex to callback function
    console.log(getQueueElement)

    // get the adjacent list for current vertex
    var  get_List = this.AdjList.get(getQueueElement);
    // loop through the list and add the element to the
    // queue if it is not processed yet 
    for(var i in get_List){
        var neigh = get_List[i];
        
        if(!visited[neigh]){
            visited[neigh] = true
            q.enqueue(neigh)
        }
    } 




}