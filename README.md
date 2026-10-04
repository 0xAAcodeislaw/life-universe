# Life Universe

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0xAAcodeislaw/life-universe)

An interactive Conway's Game of Life universe, adapted from [saharan/works/life](https://github.com/saharan/works/tree/main/life) and packaged as a Cloudflare Workers Static Assets site.

## One-click deployment

Click **Deploy to Cloudflare**, sign in to GitHub and Cloudflare, choose the Worker name, and click **Deploy**. The repository already includes the compiled browser bundle and the Wrangler static-assets configuration, so the deployment does not need a Haxe toolchain.

Use these build settings (the deploy button fills them in automatically):

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Root directory | `/` |

`npm run build` checks that the five required files in `site/` are present. `npm run deploy` uploads those files to Cloudflare Workers. Neither command compiles Haxe.

Cloudflare's deploy button creates a Worker from this public repository. It does not change the existing `0xAAcodeislaw` profile or website repositories.

## Local development

The checked-in `site/` directory is deployable as-is. To preview it locally:

```bash
npm ci
npm run build
npm run dev
```

### Changing the Haxe source

Install Haxe 4.3.1 or later and the `hgsl` and `format` Haxe libraries, then run:

```bash
haxelib install hgsl
haxelib install format
npm run build:haxe
npm run build
npm run dev
```

When changing the Haxe source, commit the rebuilt `site/main.js` along with your source changes. Cloudflare deploys the checked-in bundle; it does not compile Haxe.

The browser version requires WebGL 2.0. The original project and personal libraries are available under the MIT license; see [LICENSE](LICENSE).
