# Life Universe

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0xAAcodeislaw/life-universe)

An interactive Conway's Game of Life universe, adapted from [saharan/works/life](https://github.com/saharan/works/tree/main/life) and packaged as a Cloudflare Workers Static Assets site.

## One-click deployment

Click **Deploy to Cloudflare**, sign in to GitHub and Cloudflare, choose the Worker name, and click **Deploy**. The repository already includes the compiled browser bundle and the Wrangler static-assets configuration, so the deployment does not need a Haxe toolchain.

Cloudflare's deploy button creates a Worker from this public repository. It does not change the existing `0xAAcodeislaw` profile or website repositories.

## Local development

The checked-in `site/` directory is deployable as-is. To rebuild `site/main.js` from the Haxe source, install Haxe 4.3.1 or later, install the `hgsl` and `format` Haxe libraries, then run:

```bash
npm install
npm run build
npm run dev
```

The browser version requires WebGL 2.0. The original project and personal libraries are available under the MIT license; see [LICENSE](LICENSE).
