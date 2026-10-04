import { stat } from "node:fs/promises";

// Cloudflare deploys the checked-in browser bundle; Haxe is only needed to rebuild it.
const assets = ["index.html", "main.js", "graph.png", "anim.png", "loc.png"];

for (const asset of assets) {
  const info = await stat(new URL(`../site/${asset}`, import.meta.url));
  if (!info.isFile() || info.size === 0) {
    throw new Error(`Missing or empty deployment asset: site/${asset}`);
  }
}

console.log(`Life Universe: ${assets.length} static assets ready for deployment.`);
