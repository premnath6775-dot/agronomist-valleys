const fs = require('fs');
const path = require('path');

const inventoryPath = 'lib/inventory.ts';
let inventoryContent = fs.readFileSync(inventoryPath, 'utf8');

const itemsDir = 'public/items';
const itemFiles = fs.readdirSync(itemsDir);

function normalizeName(name) {
  let base = name.split('-')[0].split('(')[0].trim().toLowerCase();
  base = base.replace(/\s+/g, '_');
  return base;
}

const fileMap = {};
for (const file of itemFiles) {
  if (file === 'test.jpg' || file === 'seedlings.jpg') continue;
  const noExt = file.substring(0, file.lastIndexOf('.')).toLowerCase();
  fileMap[noExt] = file;
}

let replaceCount = 0;
let missing = [];

const updatedContent = inventoryContent.replace(/{[^}]+name:\s*'([^']+)'[^}]*}/g, (match, name) => {
  const normalized = normalizeName(name);
  let matchedFile = fileMap[normalized];
  
  if (!matchedFile) {
    for (const key of Object.keys(fileMap)) {
      if (normalized.includes(key) || key.includes(normalized)) {
        matchedFile = fileMap[key];
        break;
      }
    }
  }

  if (matchedFile) {
    if (match.includes('image:')) {
      const newMatch = match.replace(/image:\s*'[^']+'/, "image: '/items/" + matchedFile + "'");
      if (newMatch !== match) {
        replaceCount++;
        return newMatch;
      }
    } else {
      const newMatch = match.replace(/pkg:/, "image: '/items/" + matchedFile + "', pkg:");
      replaceCount++;
      return newMatch;
    }
  } else {
    missing.push(name);
  }
  return match;
});

fs.writeFileSync('lib/inventory.ts', updatedContent);
console.log('Replaced ' + replaceCount + ' images.');
console.log('Missing images for:', missing.length, 'items');
console.log(missing.slice(0, 20));
