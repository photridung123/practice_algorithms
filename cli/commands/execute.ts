import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

export const execute = (name: string) => {
    console.log("=====================")
    console.log("Building file dist...")
    exec("tsc", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error building file dist: ${error}`);
            return;
        }
        else {
            console.log("Build successfully!")
            console.log("=====================")
            console.log(`Execute ${name}...`)
            const rootDir = path.resolve(__dirname, '../..');
            const pathFile = `${rootDir}/dist/resolved/${name}.js`
            fs.stat(pathFile, (err, stats) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.log('This algorithms not found!');
                        console.log("=====================")
                    } else {
                        console.error('Error checking:', err);
                        console.log("=====================")
                    }
                } else {
                    exec(`node ${pathFile}`, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Executing failed: ${error}`);
                            console.log("=====================")
                            return;
                        }
                        else {
                            console.log("Result: ", stdout);
                            console.log("=====================")
                        }
                    })
                }
            });
        }
    });
}