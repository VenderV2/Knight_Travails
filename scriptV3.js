const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const startingCoord = [3,3]
let visitedCoordinates = [];

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
            const translatedCoord = [currentCoord[0]+element[0], currentCoord[1]+element[1]]
            newCoord.push(translatedCoord)
        });

        function findNextValidMove() {
            const newCoordinates = newCoord
            for (let i = 0; i < newCoordinates.length; i++) {
                const indexOfArr = newCoordinates[i]
                if (indexOfArr[0] > 8 && indexOfArr[1] > 8) {
                    return indexOfArr;
                }
            }
            return;
        }
        const nextMove = findNextValidMove(currentCoord)
        console.log(nextMove)
        return nextMove;
    }
}

class BinaryTree {
    constructor(startingCoordinate, destinationCoordinate) {
        this.root = this.buildTree(startingCoordinate, destinationCoordinate);
        let destinatonFound = false;
        // let visitedCoordinates = [];
    }
    buildTree(currentCoordinate, destination) {
        console.log('visited coords: ' + visitedCoordinates)
    //First check if this move is valid, if not then return. If true then proceed to creating new node and checking for destination

        const newNode = new Node(currentCoordinate)
        visitedCoordinates.push(newNode.coordinate)
        const nextMove = Logic.getMoveList(currentCoordinate)
        //base case is when there are 0 valid moves that have been unvisited or destination is found

        if (nextMove == destination) {
            console.log('Destination found')
            return;
        }
        else {
            newNode.move1 = this.buildTree(nextMove, destination)

            return newNode;
        }
    }
}

function knightMoves(startingCoordinate, destinationCoordinate) {
    const newTree = new BinaryTree(startingCoordinate, destinationCoordinate)
}
knightMoves([3,3],[4,5])
