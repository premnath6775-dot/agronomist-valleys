const fs = require('fs');

const inventoryPath = 'lib/inventory.ts';
const lines = fs.readFileSync(inventoryPath, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  // Look for items definition
  if (line.includes("name: '") && line.includes("enName:")) {
    // Check if it already has moq
    if (!line.includes("moq:")) {
      // Look for pkg first
      let moqVal = "10 KG"; // default
      const pkgMatch = line.match(/pkg:\s*'([^']+)'/);
      if (pkgMatch) {
        moqVal = pkgMatch[1];
        // remove old pkg to clean up
        line = line.replace(/,\s*pkg:\s*'[^']+'/, '');
        line = line.replace(/pkg:\s*'[^']+',\s*/, '');
      }
      
      // insert moq after enName
      line = line.replace(/(enName:\s*'[^']+')/, "$1, moq: '" + moqVal + "'");
      lines[i] = line;
    }
  }
}

fs.writeFileSync(inventoryPath, lines.join('\n'));
console.log("Updated inventory.ts with explicit moq fields");
