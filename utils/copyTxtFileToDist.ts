import fs from 'fs';

export function copyTxtFileToDist(sourcePath: string) {
  const distFolderPath = `dist`;
  const destinationFilePath = `${distFolderPath}/${sourcePath}`;

  try {
    // Ensure 'dist' folder exists
    if (!fs.existsSync(distFolderPath)) {
      fs.mkdirSync(distFolderPath);
    }

    // Copy 'source.txt' to 'dist/source.txt'
    fs.copyFileSync(sourcePath, destinationFilePath);
    console.log('File copied successfully.');
  } catch (error) {
    console.error('Error copying file:', error);
  }
}
