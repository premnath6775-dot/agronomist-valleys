const fs = require('fs');

const inventoryPath = 'lib/inventory.ts';
const lines = fs.readFileSync(inventoryPath, 'utf8').split('\n');
let changes = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  const nameMatch = line.match(/name:\s*'([^']+)'/);
  
  if (nameMatch) {
    const name = nameMatch[1];
    const kgMatch = name.match(/(\d+(?:\.\d+)?)\s*(KG|kg)/i);
    
    if (kgMatch) {
      const qty = kgMatch[1];
      const newPkg = qty + ' KG';
      
      const pkgMatch = line.match(/pkg:\s*'([^']+)'/);
      if (pkgMatch) {
        const oldPkg = pkgMatch[1];
        if (oldPkg !== newPkg) {
          lines[i] = line.replace(/pkg:\s*'[^']+'/, "pkg: '" + newPkg + "'");
          console.log("Updated " + name + ": " + oldPkg + " -> " + newPkg);
          changes++;
        }
      } else {
        // if no pkg exists, append it
        lines[i] = line.replace(/price:/, "pkg: '" + newPkg + "', price:");
        console.log("Added pkg to " + name + ": " + newPkg);
        changes++;
      }
    }
  }
}

fs.writeFileSync(inventoryPath, lines.join('\n'));
console.log("Done. Total changes: " + changes);
