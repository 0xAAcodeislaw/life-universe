# Life Universe

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0xAAcodeislaw/life-universe)

An interactive Conway's Game of Life universe, adapted from [saharan/works/life](https://github.com/saharan/works/tree/main/life) and packaged as a Cloudflare Workers Static Assets site.

## 原作者与致谢 / Credits

**Life Universe 的原作者是 [saharan](https://github.com/saharan)。** 原作与核心模拟代码来自 [saharan/works/life](https://github.com/saharan/works/tree/main/life)。本仓库仅整理 Cloudflare 一键部署所需的文件与配置，并添加可见署名。

向 saharan 致敬，感谢他创造并开源 Life Universe，让我们得以探索康威生命游戏的世界。原作者的版权声明与 MIT 许可证完整保留在 [LICENSE](LICENSE) 中。

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
