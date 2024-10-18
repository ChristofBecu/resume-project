const fs = require('fs');
const path = require('path');

const envFilePath = path.resolve(__dirname, 'src/environments/environment.prod.ts');
const gistResumeUrl = process.env.GISTRESUME;

fs.readFile(envFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  const result = data.replace(/gistResumeUrl: ''/, `gistResumeUrl: '${gistResumeUrl}'`);

  fs.writeFile(envFilePath, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      process.exit(1);
    }
  });
});