import { processFileLineByLine } from "../../utils";

function isSubarray(x: number, y: number) {
    return Math.abs(x - y) <= 1;
}

function pickingNumbers(a: number[]): number {
    // Write your code here
    let result = 1;
    let firstIndex = 0;
    while (firstIndex < a.length - 1) {
        let currentSubarray = [a[firstIndex]];
        for (let i = firstIndex + 1; i < a.length; i++) {
            if (isSubarray(a[i], currentSubarray[currentSubarray.length - 1])) {
                currentSubarray.push(a[i])
            }
        }

        if (currentSubarray.length > result) {
            result = currentSubarray.length;
        }
        firstIndex++;
    }

    firstIndex = 0;
    while (firstIndex < a.length - 1) {
        let currentSubarray = [a[firstIndex]];
        for (let i = firstIndex + 1; i < a.length; i++) {
            if (isSubarray(a[i], currentSubarray[currentSubarray.length - 1])) {
                currentSubarray.push(a[i])
            }
            else {
                if (currentSubarray.length > result) {
                    result = currentSubarray.length;
                }
                if (currentSubarray.length > 1) {
                    i--;
                    currentSubarray.pop();
                }
            }
        }

        if (currentSubarray.length > result) {
            result = currentSubarray.length;
        }
        firstIndex++;
    }
    return result;
}

async function main() {

    let rawFileLines = await processFileLineByLine(`${__dirname}/input.txt`);

    let a = rawFileLines.reduce<number[]>((agr, cur) => {
        let newArray = cur.replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
        agr = [...agr, ...newArray];
        return agr
    }, []);

    //RESULT
    console.log(pickingNumbers(a))
}


main()