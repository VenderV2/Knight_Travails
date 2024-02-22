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
            //randomise order of moves 
            function shuffle(array) {
                let currentIndex = array.length,  randomIndex;
              
                // While there remain elements to shuffle.
                while (currentIndex > 0) {
              
                  // Pick a remaining element.
                  randomIndex = Math.floor(Math.random() * currentIndex);
                  currentIndex--;
              
                  // And swap it with the current element.
                  [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
                }
              
                return array;
            }
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
        //Generate moves for starting coordinate, check if any of them match destination coordinate. If not, then return out of function call and repeat for move 2 through 8.
        //If it reaches move 8 without finding 'destination', then recurse function with move 1 as new starting coordinate
        if (Logic.checkIfVisited(currentCoordinate) === true) {
            return;
        }

        visitedCoordinates.push(currentCoordinate)
        const possibleMoves = Logic.getMoveList(currentCoordinate)
        console.log('--> '+ currentCoordinate)
        for (let i = 0; i < possibleMoves.length; i++) {
            const search = this.checkForDest(possibleMoves[i], destination, node)
            if (search === true) {
                console.log(possibleMoves)
                console.log('Destination Found ' + possibleMoves[i] + ' from ' + currentCoordinate)
                pathing.push(possibleMoves[i])
                return 'found'
            }
        }
        for (let i = 0; i < possibleMoves.length; i++) {
            if (this.knightMoves(possibleMoves[i], destination, node) == 'found') {
               pathing.push(possibleMoves[i])
               return 'found'
            }
        }
        console.log('--> '+ currentCoordinate)
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

