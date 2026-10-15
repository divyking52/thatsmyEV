import fs from "fs";

const mediaTs = fs.readFileSync("src/data/media.ts", "utf8");
const map = {};
for (const m of mediaTs.matchAll(/"([^"]+)": "(https:\/\/media\.storebox\.ai\/[^"]+)"/g)) {
  map[m[1]] = m[2];
}

const path = "standalone/index.html";
let html = fs.readFileSync(path, "utf8");

html = html.replace(
  /(?:assets\/(?:cars\/(?:search\/)?|brands\/)?)?([a-z0-9._-]+\.(?:webp|png|jpg|jpeg|mp4))/gi,
  (full, filename) => {
    // Only rewrite when it's an assets path or a bare filename we know
    if (full.startsWith("assets/") || full === filename) {
      return map[filename] || full;
    }
    return full;
  },
);

// Safer pass: explicit assets/ replacements only
html = fs.readFileSync(path, "utf8");
html = html.replace(/assets\/(?:cars\/(?:search\/)?|brands\/)?([a-z0-9._-]+\.(?:webp|png|jpg|jpeg|mp4))/gi, (_, filename) => {
  if (!map[filename]) {
    console.warn("missing map for", filename);
    return `assets/${filename}`;
  }
  return map[filename];
});

fs.writeFileSync(path, html);

const remaining = [...html.matchAll(/assets\//g)].length;
console.log("patched standalone/index.html; remaining assets/ refs:", remaining);
