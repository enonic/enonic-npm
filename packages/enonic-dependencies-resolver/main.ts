const path = require('path');

import find from './src/find';
import resolve from './src/resolve';
import modify from './src/modify';

const FILES_ALL = './**/*.ts';

export async function list() {};

export async function migrate() {
  const filesPath = path.resolve(FILES_ALL);
  console.log('Finding files...');
  const files: string[] = await find(filesPath);
  console.log(`Found ${files.length} files.`);
  const filesData = resolve(files);
  // filesData.forEach((data, file) => {
  //   console.log(`${file}\n  ${JSON.stringify(data)}`);
  // });
  modify(filesData);
};
