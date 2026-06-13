const fs = require('fs');

const inventoryPath = 'lib/inventory.ts';
const lines = fs.readFileSync(inventoryPath, 'utf8').split('\n');

const itemsDir = 'public/items';
const itemFiles = fs.readdirSync(itemsDir);

const imagesDir = 'public/images';
const imageFiles = fs.readdirSync(imagesDir);

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
fileMap['mee kuning'] = 'mee kuning.jpg';
fileMap['tomato_cameron_highland_xl'] = 'tomato_cameron_xl.jpg';
fileMap['carrot'] = 'lobak_merah.jpg';
fileMap['mushrooms_bebola_ikan'] = 'mushroom_fish_cake.jpg';
fileMap['honeydew'] = 'tembikai_kuning.jpg';
fileMap['bayam_hijau'] = 'bayam-hijau.png'; // Will manually route to /images/
fileMap['bayam_merah'] = 'bayam-merah.png';
fileMap['kangkung'] = 'kangkung.png';
fileMap['pucuk_manis'] = 'pucuk-manis.png';
fileMap['pucuk_paku'] = 'pucuk-paku.png';
fileMap['kailan'] = 'kailan.png';
fileMap['sawi_hijau'] = 'sawi-hijau.png';

let missing = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const nameMatch = line.match(/name:\s*'([^']+)'/);
  
  if (nameMatch) {
    const name = nameMatch[1];
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

    let finalPath = null;

    if (matchedFile) {
      if (matchedFile.endsWith('.png') && imageFiles.includes(matchedFile)) {
        finalPath = '/images/' + matchedFile;
      } else {
        finalPath = '/items/' + matchedFile;
      }
    } else {
      // Check if current image path is valid
      const imgMatch = line.match(/image:\s*'([^']+)'/);
      if (imgMatch) {
        const currentPath = imgMatch[1];
        if (currentPath.startsWith('/images/')) {
          const filename = currentPath.split('/').pop();
          if (imageFiles.includes(filename)) {
            finalPath = currentPath;
          }
        } else if (currentPath.startsWith('/items/')) {
          const filename = currentPath.split('/').pop();
          if (itemFiles.includes(filename)) {
            finalPath = currentPath;
          }
        }
      }
    }

    if (!finalPath) {
      // Fallback: try to see if any file in public/images matches the name closely
      const dashName = normalized.replace(/_/g, '-');
      if (imageFiles.includes(dashName + '.png')) {
        finalPath = '/images/' + dashName + '.png';
      } else if (imageFiles.includes(dashName + '.jpg')) {
        finalPath = '/images/' + dashName + '.jpg';
      }
    }

    if (finalPath) {
      if (line.includes('image:')) {
        lines[i] = line.replace(/image:\s*'[^']+'/, "image: '" + finalPath + "'");
      } else {
        lines[i] = line.replace(/pkg:/, "image: '" + finalPath + "', pkg:");
      }
    } else {
      missing.push(name);
    }
  }
}

fs.writeFileSync('lib/inventory.ts', lines.join('\n'));
console.log('Processed. Missing:', missing.length);
console.log(missing);
