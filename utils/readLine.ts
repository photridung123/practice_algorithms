import * as fs from 'fs';
import * as readline from 'readline';

export async function processFileLineByLine(filePath: string) {
    const lines = [];
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity // Read all lines without trimming
    });

    for await (const line of rl) {
        lines.push(line)
    }
    return lines
}