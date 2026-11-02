# ZeroScopeSolutions

Personal cybersecurity site: a home page with a terminal, a blog, and a few service pages.
Plain HTML, CSS and JavaScript. No build step, no frameworks, no database.

> Stay curious. Stay sharp.

## Folder layout

```
your-site/
├── index.html            Home page
├── styles.css            All styling (colors, fonts, layout)
├── content.js            YOUR CONTENT: links, blog list, best-practice cards
├── site.js               Shared code: builds the nav + footer and the blog list
├── zeroscopesolutions.png   (you add this) logo / favicon
├── VPN.png                  (you add this) featured article image
├── blogs/
│   ├── index.html        Blog list page
│   ├── post-template.html   Copy this to write a new post
│   └── post-*.html       The 17 articles
└── services/
    ├── network-service.html
    └── pentesting-service.html
```

Keep this layout. Pages in a subfolder load files from the main folder with `../`.

## How the files connect

Every page loads the same three files:

```html
<link rel="stylesheet" href="styles.css">                  <!-- in <head> -->
<script src="content.js"></script>                         <!-- end of <body> -->
<script src="site.js" data-base="" data-active="home"></script>
```

Pages inside a subfolder use `../`:

```html
<link rel="stylesheet" href="../styles.css">
<script src="../content.js"></script>
<script src="../site.js" data-base="../" data-active="blogs"></script>
```

- `content.js` must load **before** `site.js`.
- `data-base` is `""` in the main folder and `"../"` in `blogs/` and `services/`.
- `data-active` picks the highlighted nav link (`home` or `blogs`; leave `""` for none).
- The header and footer are added by `site.js`, so there is no header or footer in the HTML pages.

## Run it locally

Open `index.html` in your browser (double-click it). No server needed.
If something looks broken, press **F12**, open the **Console** tab, and look for red errors.
A `404` names the file with a wrong path.

## Common edits

| I want to change... | Edit this |
|---|---|
| Colors, fonts | `:root` block at the top of `styles.css` |
| Nav links | `NAV` list in `site.js` (section 1) |
| Footer links / social icons | `ICONS` in `site.js`, URLs in `LINKS` in `content.js` |
| Home headline, stats, terminal text | `index.html` (sections 1 and 2) |
| Latest article card on the home page | `index.html` (section 3) |
| Cybersecurity best-practice cards | `PRACTICES` in `content.js` |
| Scanlines / background glow | `styles.css` section 3 (delete a block to turn it off) |

## Add a new blog post

1. Copy `blogs/post-template.html` and rename it, for example `post-zero-trust.html`.
2. Open it and replace the title, tags, date, read time, body text and the LinkedIn link.
3. Open `content.js` and add one line at the **top** of the `BLOGS` list (newest first):

```js
{ file:"post-zero-trust.html", title:"Zero Trust Basics", topic:"Security",
  date:"November 2026", read:"6 min read", summary:"One-line description." },
```

A new `topic` name automatically creates a new filter button on the Blogs page.
To link to an outside article instead of a page, use `url:"https://..."` instead of `file`.

### Writing inside a post

- `<h2>` section heading, `<h3>` sub-heading, `<p>` paragraph
- `<code>inline code</code>` and `<pre><code>code block</code></pre>`
- `<div class="callout">` tip box and `<div class="warning">` warning box
- `<hr class="post-divider">` section divider

## Fonts

The headings use a Minecraft-style font. The site looks for `fonts/minecraft.woff2` next to
`styles.css` first, then a CDN copy, then falls back to Silkscreen. Check the font's license
before using it commercially, or switch `--font-display` in `styles.css` to an open font.
The other fonts (Share Tech Mono, Exo 2, Silkscreen) load from Google Fonts and need internet.

## Deploy

**Your own server (nginx or Apache):** copy the folder into the web root.

```bash
sudo cp -r ~/zeroscopesolutions/* /usr/share/nginx/html/   # nginx
sudo cp -r ~/zeroscopesolutions/* /var/www/html/           # Apache (httpd)
```

If the page doesn't load from the internet, check that the server's firewall or security
group allows inbound HTTP (port 80) and HTTPS (443).

**GitHub Pages / GitLab Pages:** push the whole folder to a repo and turn on Pages.

After uploading, hard-refresh with **Ctrl+Shift+R** to skip the browser cache.

## Troubleshooting

- **Blog list or nav is empty:** `content.js` or `site.js` isn't loading. Check the folder layout
  and the `../` on subfolder pages.
- **Page has no styling:** the `styles.css` path is wrong for that folder.
- **Images missing:** add `zeroscopesolutions.png` and `VPN.png` next to `index.html`.
- **Old header shows on a post:** that page still has its own `<header>`. Use the versions in `blogs/`.
- **A post link goes to the wrong LinkedIn article:** edit the `linkedin-btn` link at the bottom
  of that post. `post-vpn.html` and `post-web.html` currently point to the newsletter.

## Links

- GitHub: https://github.com/runnindead
- GitLab: https://gitlab.com/runnindead
- LinkedIn: https://www.linkedin.com/in/wil-dennison-9a48a028a/
- Newsletter: https://www.linkedin.com/newsletters/zeroscope-solutions-7384806620419178496/

© 2026 ZeroScope Solutions. All rights reserved.
