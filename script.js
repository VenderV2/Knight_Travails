const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const startingCoord = [3,3]
let visitedCoordinates = [];
let i = 0;
let b = 0;
let shortestPath = []

class Node {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.visited = true;
    }
}
class Logic {
    static getMoveList(currentCoord) {
        if (currentCoord == undefined) {
            return
        }
        function generateMoves() {
            let i = 0
            let listOfMoves = []
            y2.forEach(element => {
                listOfMoves.push([x1[i],element])
                listOfMoves.push([x1[i+1],element])
            });
            x2.forEach(element => {
                listOfMoves.push([element,y1[i]])
                listOfMoves.push([element,y1[i+1]])
            });
            return listOfMoves;
        }
        let newCoord = []
        const listOfMoves = generateMoves()
        console.log(currentCoord)
        listOfMoves.forEach(element => {
            const translatedCoord = [currentCoord[0]+element[0], currentCoord[1]+element[1]]
            newCoord.push(translatedCoord)
        });
        let allValidMoves = [];
        for (let i = 0; i < newCoord.length; i++) {
            const indexOfArr = newCoord[i]
            if (indexOfArr[0] <= 8 && indexOfArr[1] <= 8 && indexOfArr[0] >= 1 && indexOfArr[1] >= 1) {
                allValidMoves.push(indexOfArr)
            }
        }
        return allValidMoves;
    }
}

class BinaryTree {
    constructor(startingCoordinate, destinationCoordinate) {
        this.root = this.buildTree(startingCoordinate, destinationCoordinate);
        this.stepCount = this.Search(this.root, destinationCoordinate)
    }
    buildTree(currentCoordinate, destination) {
        const newNode = new Node(currentCoordinate)
        if (JSON.stringify(visitedCoordinates).includes(JSON.stringify(currentCoordinate)) === true) {
            return newNode;
        }
        if (this.destinatonFound == true) {
            return newNode;
        }
        console.log('Not visited ' + currentCoordinate)


        visitedCoordinates.push(newNode.coordinate)
        const validMoves = Logic.getMoveList(currentCoordinate)
        console.log(currentCoordinate)
        console.log('vm')
        console.log(validMoves)
        //base case is when there are 0 valid moves that have been unvisited or destination is found
        
        if (JSON.stringify(currentCoordinate) === JSON.stringify(destination)) {
            console.log('Destination found')
            //newNode.destination = true;
            this.destinatonFound = true;
            return newNode
        }
        else {
         if (validMoves == undefined) {
            return
         }
            newNode.nextNode1 = this.buildTree(validMoves[0], destination)
            newNode.nextNode2 = this.buildTree(validMoves[1], destination)
            newNode.nextNode3 = this.buildTree(validMoves[2], destination)
            newNode.nextNode4 = this.buildTree(validMoves[3], destination)
            newNode.nextNode5 = this.buildTree(validMoves[4], destination)
            newNode.nextNode6 = this.buildTree(validMoves[5], destination)
            newNode.nextNode7 = this.buildTree(validMoves[6], destination)
            newNode.nextNode8 = this.buildTree(validMoves[7], destination)
        
        }
        b++
        console.log(currentCoordinate)
        return newNode;
    }
    Search(node, queriedCoordinate) {
       // console.log('Searching...')
        console.log(node.nextNode1)
        if ((stringify(node.nextNode1) == undefined ||stringify(node.nextNode2) == undefined ||stringify(node.nextNode3) == undefined ||stringify(node.nextNode4) == undefined ||stringify(node.nextNode5) == undefined ||stringify(node.nextNode6) == undefined ||stringify(node.nextNode7) == undefined ||stringify(node.nextNode8) == undefined || stringify(node) == undefined)) {
            if (stringify(node.coordinate) == stringify(queriedCoordinate)) {
                console.log('Search Complete 2')
                return node
            }
            return null
        }
        
        // const nextNode1 = this.Search(node.nextNode1, queriedCoordinate)
        // if (nextNode1 !== null) {shortestPath.push(node.nextNode1); return nextNode1}
        // const nextNode2 = this.Search(node.nextNode2, queriedCoordinate)
        // if (nextNode2 !== null) {shortestPath.push(node.nextNode2);return nextNode2}
        // const nextNode3 = this.Search(node.nextNode3, queriedCoordinate)
        // if (nextNode3 !== null) {shortestPath.push(node.nextNode3);return nextNode3}
        // const nextNode4 = this.Search(node.nextNode4, queriedCoordinate)
        // if (nextNode4 !== null) {shortestPath.push(node.nextNode4);return nextNode4}
        // const nextNode5 = this.Search(node.nextNode5, queriedCoordinate)
        // if (nextNode5 !== null) {shortestPath.push(node.nextNode5);return nextNode5}
        // const nextNode6 = this.Search(node.nextNode6, queriedCoordinate)
        // if (nextNode6 !== null) {shortestPath.push(node.nextNode6);return nextNode6}
        // const nextNode7 = this.Search(node.nextNode7, queriedCoordinate)
        // if (nextNode7 !== null) {shortestPath.push(node.nextNode7);return nextNode7}
        // const nextNode8 = this.Search(node.nextNode8, queriedCoordinate)
        // if (nextNode8 !== null) {shortestPath.push(node.nextNode8);return nextNode8}

        const nextNode1 = this.Search(node.nextNode1, queriedCoordinate)
        
        const nextNode2 = this.Search(node.nextNode2, queriedCoordinate)
        
        const nextNode3 = this.Search(node.nextNode3, queriedCoordinate)
   
        const nextNode4 = this.Search(node.nextNode4, queriedCoordinate)
   
        const nextNode5 = this.Search(node.nextNode5, queriedCoordinate)

        const nextNode6 = this.Search(node.nextNode6, queriedCoordinate)

        const nextNode7 = this.Search(node.nextNode7, queriedCoordinate)

        const nextNode8 = this.Search(node.nextNode8, queriedCoordinate)
    
    }
    
}

function stringify(arrg) {
    return JSON.stringify(arrg);
}
// function knightMoves(startingCoordinate, destinationCoordinate) {
//     const newTree = new BinaryTree(startingCoordinate, destinationCoordinate)
//     console.log(newTree)
// }
// knightMoves([3,3],[4,5])

const newTree = new BinaryTree([3,3],[5,3])
console.log(newTree)
console.log(visitedCoordinates)
console.log(b + ' moves')
console.log(newTree.stepCount)
console.log(shortestPath)