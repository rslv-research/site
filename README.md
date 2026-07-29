# Resolve Labs website

Static bilingual company website for [rslv.dev](https://rslv.dev), built with
[Zola](https://www.getzola.org/) and vanilla CSS.

## Local development

Install Zola 0.22.1, then run:

```sh
zola serve
```

The local site is available at <http://127.0.0.1:1111/>.

Before publishing, validate links and create a production build:

```sh
zola check
zola build
```

Generated files are written to `public/` and are not committed.

## Project structure

- `content/`: Japanese content in `.md` files and English translations in
  `.en.md` files.
- `templates/`: shared layouts, partials, macros, and Markdown shortcodes.
- `static/`: the stylesheet, self-hosted font, logo, and custom-domain file.
- `design-snapshots/`: source-only visual references that Zola does not publish.

The contextual dictionary card is defined once in
`templates/macros/language-example.html`. Templates call the macro directly;
Markdown pages use the `language_example` shortcode backed by the same macro.

The Research page is intentionally lightweight until there is substantive work
ready to publish. A future blog can be added as a normal Zola section without
changing the existing routes or layouts.

Space Grotesk 5.3.0 is self-hosted under the SIL Open Font License. Japanese
text uses the visitor's system Japanese font to avoid shipping a multi-megabyte
webfont payload.

## Deployment

Pushing `master` runs `.github/workflows/deploy.yml`, which checks and builds the
site with Zola 0.22.1 before deploying it through GitHub Pages. In the GitHub
repository settings, Pages must use **GitHub Actions** as its source.

The custom domain is declared in `static/CNAME`. DNS configuration for
`rslv.dev` is managed outside this repository.
