//REF: https://www.hackerrank.com/challenges/magic-square-forming/problem?isFullScreen=true

type Square = number[][];

const input: Square = new Array(
    new Array(8, 7, 4),
    new Array(1, 5, 9),
    new Array(6, 3, 2)
);

const MAGIC_SQUARE: Square[] = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
]

function costToConvertMagicSquare(square: Square, magicSquare: Square): number {

    let cost = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cost += Math.abs(square[i][j] - magicSquare[i][j])
        }
    }
    return cost;
}

function formingMagicSquare(s: number[][]): number {
    // Write your code here
    let minCost = Infinity;
    for (let i = 0; i < MAGIC_SQUARE.length; i++) {
        let cost = costToConvertMagicSquare(s, MAGIC_SQUARE[i]);
        minCost = Math.min(cost, minCost);
    }

    return minCost;
}

let result = formingMagicSquare(input);
console.log(result);