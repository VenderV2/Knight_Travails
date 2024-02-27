const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const startingCoord = [3,3]
let visitedCoordinates = [];
let i = 0;
let b = 0;
let pathing = []

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
            let i = 0;
            let listOfMoves = []
            y2.forEach(element => {
                listOfMoves.push([x1[i],element])
                listOfMoves.push([x1[i+1],element])
            });
            x2.forEach(element => {
                listOfMoves.push([element,y1[i]])
                listOfMoves.push([element,y1[i+1]])
            });
            const randomisedListOfMoves = shuffle(listOfMoves)
            return randomisedListOfMoves;
        }
        let newCoord = []
        const listOfMoves = generateMoves()
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
    static checkIfVisited(currentCoordinate) {
        if (stringify(visitedCoordinates).includes(stringify(currentCoordinate))) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Gameboard {
    constructor(startingCoordinate, destinationCoordinate) {
        this.root = new Node(startingCoordinate)
        this.knightMoves(startingCoordinate, destinationCoordinate, this.root);
        pathing.push(startingCoordinate)
    }
    knightMoves(currentCoordinate, destination, node) {

 
    }
    checkForDest(possibleCoordinate, destination, node) {
        if (stringify(possibleCoordinate) === stringify(destination)) {
            return true;
        }
        else {
            return false;
        }
    }

}

function stringify(arrg) {
    return JSON.stringify(arrg);
}

const newTree = new Gameboard([3,3],[8,8])

console.log(pathing)
console.log((pathing.length - 1) + ' moves')

function tendTowardsDest(currentCoordinate, destination) {
//We want to coordinates to tend towards our destination. So we want x and y to increase or decrease towards the destination.
//If x or y can't increase anymore (because it has hit a wall), then which ever value cant increase needs to move in a direction that it decreases.


}