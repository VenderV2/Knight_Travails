const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const startingCoord = [3,3]
let visitedCoordinates = [];
let i = 0;

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
        listOfMoves.forEach(element => {
            i++
            console.log(i)
            const translatedCoord = [currentCoord[0]+element[0], currentCoord[1]+element[1]]
            newCoord.push(translatedCoord)
        });
        for (let i = 0; i < newCoord.length; i++) {
            const indexOfArr = newCoord[i]
            if (indexOfArr[0] <= 8 && indexOfArr[1] <= 8 && indexOfArr[0] >= 1 && indexOfArr[1] >= 1) {
                for (let k = 0; k < visitedCoordinates.length; k++) {
                    if (JSON.stringify(visitedCoordinates[k]) === JSON.stringify(indexOfArr)){
                    }
                    else {
                        console.log('Not visited before ' + indexOfArr)
                        return indexOfArr;
                    }
                }
            }
        }
    }
}

class BinaryTree {
    constructor(startingCoordinate, destinationCoordinate) {
        this.root = this.buildTree(startingCoordinate, destinationCoordinate);
        let destinatonFound = false;
    }
    buildTree(currentCoordinate, destination) {
        const newNode = new Node(currentCoordinate)
        visitedCoordinates.push(newNode.coordinate)
        const validMoves = Logic.getMoveList(currentCoordinate)
        //base case is when there are 0 valid moves that have been unvisited or destination is found
        if (JSON.stringify(validMoves) === JSON.stringify(destination)) {
            console.log('Destination found')
            newNode.nextNode = new Node(validMoves)
            return newNode;
        }
        else {
            newNode.nextNode = this.buildTree(validMoves, destination)
        }
    }
}

// function knightMoves(startingCoordinate, destinationCoordinate) {
//     const newTree = new BinaryTree(startingCoordinate, destinationCoordinate)
// }
// knightMoves([3,3],[4,5])

const newTree = new BinaryTree([3,3],[8,8])
