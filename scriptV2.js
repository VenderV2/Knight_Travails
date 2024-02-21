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
    static getNextMove(currentCoordinate) {
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
        function translateCoordinates(currentCoord) {
            console.log(currentCoord)
            let newCoord = []
            const listOfMoves = generateMoves()
            listOfMoves.forEach(element => {
                const translatedCoord = [currentCoord[0]+element[0], currentCoord[1]+element[1]]
                newCoord.push(translatedCoord)
            });
            return newCoord;
        }

        function findNextValidMove(currentCoord) {
            const newCoord = translateCoordinates(currentCoord)
            for (let i = 0; i < newCoord.length; i++) {
                const indexOfArr = newCoord[i]
                if (indexOfArr[0] <= 8 && indexOfArr[1] <= 8) {
                    console.log('true' + indexOfArr)
                }
                else console.log('false ' + indexOfArr)
            }
            return;
        }
        const nextMove = findNextValidMove(currentCoordinate)
        console.log(nextMove)
        return nextMove;

    }
    // static checkIfMoveIsValid(currentCoordinate) {
    //     console.log('current coord is ' + currentCoordinate)
    //     console.log()
    //     if (visitedCoordinates.includes(currentCoordinate) == true) {
    //         return false;
    //     }
    //     else if (currentCoordinate.includes('-') == true) {
    //         return false;
    //     }
    //     else if (currentCoordinate[0] > 8 || currentCoordinate[1] > 8) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }
}

class BinaryTree {
    constructor(startingCoordinate, destinationCoordinate) {
        const startingNode = new Node(startingCoordinate)
        this.root = startingNode;
        this.buildTree(startingCoordinate, destinationCoordinate);
    }
    buildTree(currentCoordinate, destination, node) {
    //First check if this move is valid, if not then return. If true then proceed to creating new node and checking for destination

        const newNode = new Node(currentCoordinate)
        visitedCoordinates.push(currentCoordinate)
        const nextCoord = Logic.getNextMove(currentCoordinate)
        //base case is when there are 0 valid moves that have been unvisited or destination is found

        if (nextCoord == destination) {
            console.log('Destination found')
            return newNode;
        }
        else {
            this.buildTree(nextCoord, destination, newNode.nextNode)
        }
    }
}

function knightMoves(startingCoordinate, destinationCoordinate) {
    const newTree = new BinaryTree(startingCoordinate, destinationCoordinate)
}
knightMoves([3,3],[4,5])
