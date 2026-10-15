import fs from "fs";

const d = JSON.parse(fs.readFileSync("media-tmev.json", "utf8"));
const CDN = "https://media.storebox.ai";
const map = {};
for (const m of d.results) {
  if (!map[m.filename]) map[m.filename] = CDN + m.file_url;
}

function resolve(slug) {
  for (const ext of [".jpg", ".png", ".webp"]) {
    const key = slug + ext;
    if (map[key]) return map[key];
  }
  return null;
}

const path = "src/data/evCatalog.ts";
const src = fs.readFileSync(path, "utf8");
const updated = src.replace(/img: "([^"]+)"/g, (_, slug) => {
  const url = resolve(slug);
  if (!url) {
    console.warn("missing", slug);
    return "img: null";
  }
  return `img: ${JSON.stringify(url)}`;
});
fs.writeFileSync(path, updated);
console.log("patched evCatalog imgs");
