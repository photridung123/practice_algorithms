import * as fs from 'fs';
import path from 'path';
export const list = (options: any) => {
    console.log("==================")
    const rootDir = path.resolve(__dirname, '../..');
    const algoItems = fs.readdirSync(`${rootDir}/algorithms`);
    for (let i = 0; i < algoItems.length; i++) {
        console.log(algoItems[i].replace(".ts",""));
    }
    console.log("==================")
}