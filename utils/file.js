import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(fileName) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), fileName);
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}
