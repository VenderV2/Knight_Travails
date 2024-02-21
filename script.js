const y2 = [2,-2]
const y1 = [1,-1]
const x2 = [2,-2]
const x1 = [1,-1]
const coord = [3,3]


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

function getNewCoords(currentCoord) {
    let newCoord = []
    const listOfMoves = generateMoves()
    listOfMoves.forEach(element => {
        const translatedCoord = [currentCoord[0]+element[0], currentCoord[1]+element[1]]
        newCoord.push(translatedCoord)
    });
    return newCoord;
}

const newCoord = getNewCoords(coord);
console.log(newCoord)