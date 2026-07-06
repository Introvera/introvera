const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'app'),
  path.join(__dirname, 'src', 'components')
];

const extensions = ['.tsx', '.ts'];

const replacements = [
  { search: /bg-black/g, replace: 'bg-background' },
  { search: /text-white/g, replace: 'text-foreground' },
  { search: /border-white/g, replace: 'border-foreground' },
  { search: /bg-white/g, replace: 'bg-foreground' }, 
  { search: /text-black/g, replace: 'text-background' }, 
  { search: /border-black/g, replace: 'border-background' }
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

let changedFiles = 0;

directories.forEach(dir => {
  walkDir(dir, filePath => {
    if (extensions.some(ext => filePath.endsWith(ext))) {
      let content = fs.readFileSync(filePath, 'utf8');
      let newContent = content;
      
      replacements.forEach(({ search, replace }) => {
        newContent = newContent.replace(search, replace);
      });

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        changedFiles++;
        console.log(`Updated ${filePath}`);
      }
    }
  });
});

console.log(`Total files changed: ${changedFiles}`);
