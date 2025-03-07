import fs from "fs";

export async function checkFileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error:any) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error; // Throw other errors
  }
}