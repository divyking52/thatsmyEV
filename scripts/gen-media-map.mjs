import fs from "fs";

const d = JSON.parse(fs.readFileSync("media-tmev.json", "utf8"));
const CDN = "https://media.storebox.ai";
const byFile = {};

for (const m of d.results) {
  if (!byFile[m.filename]) {
    byFile[m.filename] = CDN + m.file_url;
  }
}

const entries = Object.entries(byFile).sort(([a], [b]) => a.localeCompare(b));
const lines = entries
  .map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`)
  .join("\n");

const out = `/** Storebox CDN media for "thats my ev" site. Mapped from media API. */
export const MEDIA_CDN = "${CDN}" as const;

export const mediaByFilename: Record<string, string> = {
${lines}
};

/** Resolve a filename or legacy /assets/... path to a Storebox CDN URL. */
export function media(pathOrName: string): string {
  const name = pathOrName.split("/").pop() || pathOrName;
  return mediaByFilename[name] ?? pathOrName;
}

export const mediaAssets = {
  logoLight: media("logo-light.webp"),
  logo: media("logo.png"),
  heroVideo: media("hero-ev.mp4"),
  heroPoster: media("hero-ev-1920.webp"),
  heroFallback: media("hero-ev.webp"),
  chargingLifestyle: media("ev-charging-lifestyle.webp"),
  author: media("rahul-shonak.jpg"),
} as const;
`;

fs.writeFileSync("src/data/media.ts", out);
console.log(`wrote src/data/media.ts (${entries.length} files)`);
