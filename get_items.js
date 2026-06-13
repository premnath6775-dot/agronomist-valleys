const fs = require('fs');

// Parse the file and extract names
const content = fs.readFileSync('lib/inventory.ts', 'utf8');
const names = [];
const regex = /name:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
  names.push(match[1]);
}

// Remove the 7 already generated
const done = ['Bayam Hijau', 'Bayam Merah', 'Kangkung', 'Pucuk Manis', 'Sawi Hijau', 'Kailan', 'Pucuk Paku'];
const remaining = names.filter(n => !done.includes(n));

const batches = [[], [], [], []];
remaining.forEach((name, i) => {
  batches[i % 4].push(name);
});

batches.forEach((batch, i) => {
  fs.writeFileSync(`batch${i}.json`, JSON.stringify(batch));
});
console.log("Batches created.");
