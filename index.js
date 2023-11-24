console.log('\x1b[35m Migration starting \x1b[0m');

const fs = require('fs');
const path = require('path');

const filesPath = '../src';

const SummaryLog = {

};

function replaceInFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  if (fileContent.includes('Hello')) {
    const result = fileContent.replace(/Hello/g, 'Hello World');
    fs.writeFileSync(filePath, result, 'utf8');

    SummaryLog[filePath] = [
      ...(SummaryLog[filePath] || []),
      'Hello replaced'
    ];
  }
}

function findVueFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const filePathMetaData = fs.statSync(filePath);
    if (filePathMetaData.isDirectory()) {
      findVueFiles(filePath);
    } else if (path.extname(filePath) === '.vue') {
      replaceInFile(filePath);
    }
  }
}

findVueFiles(filesPath);

fs.writeFile('migration-summary.json', JSON.stringify(SummaryLog, null, 2), (err) => {
  if (err) throw err;
  console.log('\x1b[31m Migration summary saved to a file. \x1b[0m');
});

console.log('\x1b[32m Migration ended \x1b[0m', SummaryLog);
