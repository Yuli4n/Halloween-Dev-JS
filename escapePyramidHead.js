function escapePyramidHead(room) {
    let graph = {};
    let origin;
    let destination;
    function dijkstraHops(graph, start) {
        let distances = {};
        let queue = [start];
        
        for (let node in graph) {
            distances[node] = Infinity;
        }
        
        distances[start] = 0;
    
        while (queue.length) {
            let currentNode = queue.shift();
            let currentDistance = distances[currentNode];
    
            for (let neighbor of graph[currentNode]) {
                let newDistance = currentDistance + 1;
                
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    queue.push(neighbor);
                }
            }
        }
    
        return distances;
    }

    for (let i = 0; i < room.length; i++) {
        for (let j = 0; j < room[0].length; j++) {
            const node = `${i},${j}`;
            graph[node] = [];

            if (room[i][j] === '▲') {
                origin = node;
            }
            if (room[i][j] === 'T') {
                destination = node;
            }

            if (room[i][j] !== '#') {
                if (i > 0 && room[i - 1][j] !== '#') {
                    graph[node].push(`${i - 1},${j}`);
                }
                if (i < room.length - 1 && room[i + 1][j] !== '#') {
                    graph[node].push(`${i + 1},${j}`);
                }
                if (j > 0 && room[i][j - 1] !== '#') {
                    graph[node].push(`${i},${j - 1}`);
                }
                if (j < room[0].length - 1 && room[i][j + 1] !== '#') {
                    graph[node].push(`${i},${j + 1}`);
                }
            }
        }
    }

    let result = dijkstraHops(graph, origin);
    return result[destination] !== Infinity ? result[destination] : -1;
}

const room = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
  ]

console.log(escapePyramidHead(room)); // -> 8
