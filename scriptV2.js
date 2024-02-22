const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const startingCoord = [3,3]
let visitedCoordinates = [];
let i = 0;
let b = 0;

class Node {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.visited = true;
    }
}
class Logic {
    static getMoveList(currentCoord) {
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
            i++
            console.log(i)
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
    }
    buildTree(currentCoordinate, destination) {
        const newNode = new Node(currentCoordinate)
        if (JSON.stringify(visitedCoordinates).includes(JSON.stringify(currentCoordinate)) === true) {
            return newNode;
        }
        if (this.destinatonFound == true) {
            return newNode
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
            newNode.nextNode = new Node(validMoves)
            this.destinatonFound = true;
        }
        else {
            for (let j = 0; j < validMoves.length; j++) {
                newNode.nextNode = this.buildTree(validMoves[j], destination)
            }
        }
        b++
        console.log(currentCoordinate)
        return newNode;
    }
    Search(queriedCoordinate) {

    }
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