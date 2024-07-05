import fs from 'fs';
import path from 'path';
import { checkFileExists } from '../../utils/checkFileExist';
import { execPromise } from '../../utils/execPromise';
import { copyTxtFileToDist } from '../../utils';

export const execute = async (name: string) => {
    try {
        console.log("=====================");
        console.log("Building file dist...");
        await execPromise("tsc");
        console.log("Build successfully!");
        console.log("=====================");
        const rootDir = path.resolve(__dirname, '../..');
        const containerPath = `algorithms/${name}`;
        const filePath = `${rootDir}/dist/${containerPath}/resolved.js`;
        console.log(`Copy input file...`);
        copyTxtFileToDist(`${containerPath}/input.txt`)
        console.log("=====================");
        console.log(`Execute ${name}...`);
       
        await fs.promises.stat(filePath);
        await checkFileExists(filePath);
        const { stdout } = await execPromise(`node ${filePath}`);
        console.log(`Execute successfully. Result is: ${stdout.trim()}`);
    }
    catch (error) {
        console.error('Error executing command:', error);
    }
    finally {
        console.log("=====================");
    }
}