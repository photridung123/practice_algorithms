import { processFileLineByLine } from "../../utils";

function plusTwoBigInt(a: string, b: string): string {

    let result: string = a;
    if (b.length > a.length) {
        result = b;
        b = a;
        a = result;
    }

    while (b.length < a.length) {
        b = `0${b}`;
    }

    result = '';
    let temp = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        let colResult = parseInt(a[i]) + temp + parseInt(b[i]);
        temp = 0;

        if (colResult > 9) {
            colResult -= 10;
            temp = 1;
        }
        result = `${colResult}${result}`;
    }
    return temp !== 1 ? result : `1${result}`;
}

function multiplyTwoBigInt(a: string, b: string): string {
    let result: string = a;
    if (b.length > a.length) {
        result = b;
        b = a;
        a = result;
    }

    result = '0';
    for (let i = b.length - 1; i >= 0; i--) {

        let numberOfZeroDigit = b.length - 1 - i;
        let partSum = a;
        for (let j = 0; j < numberOfZeroDigit; j++) {
            partSum = `${partSum}0`;
        }

        for (let j = 0; j < parseInt(b[i]); j++) {
            result = plusTwoBigInt(partSum, result)
        }

    }
    return result;
}

function extraLongFactorials(n: number): void {
    // Write your code here

    let result: string = "1";
    for (let i = 1; i <= n; i++) {
        result = multiplyTwoBigInt(result, i.toString());
    }
    console.log(result);
}

async function main() {
    const rawFileLines = await processFileLineByLine(`${__dirname}/input.txt`);
    const n: number = parseInt(rawFileLines[0].trim(), 10);

    extraLongFactorials(n);
}

main()