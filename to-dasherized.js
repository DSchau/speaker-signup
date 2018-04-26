const fs = require('fs');
const path = require('path');

const base = path.resolve('src/components');
const folders = fs
  .readdirSync(base)
  .filter(file => fs.statSync(path.join(base, file)).isDirectory())
  .map(folder => [folder, fs.readdirSync(path.join(base, folder))]);

const dasherize = str => {
  return str
    .replace(/([A-Z])/g, (match, letter) => `-${letter}`.toLowerCase())
    .replace(/^-/, '');
};

async function run() {
  await Promise.all(
    folders.map(async ([folder, files]) => {
      const dasherized = dasherize(folder);

      const original = path.join(base, folder);
      const destination = path.join(base, dasherized);

      if (original !== destination) {
        fs.renameSync(original, destination);
      }

      files.map(file => {
        const dasherizedFile = dasherize(file);

        const fileOriginal = path.join(base, folder, file);
        const fileDestination = path.join(base, folder, dasherizedFile);

        if (fileOriginal !== fileDestination) {
          fs.renameSync(fileOriginal, fileDestination);
        }
      });
    })
  );
}

run();
