# Design snapshots

These standalone files are visual references only. Zola does not include them in
the production site.

## Initial homepage

`initial/index.html` preserves the clean homepage design from before the
notebook-grid and annotated contextual-lookup changes. It keeps the approved
real SVG logo and corrected hero-logo sizing.

From the project root, run:

```sh
python3 -m http.server 8000
```

Then open:

<http://localhost:8000/design-snapshots/initial/>

To compare it with the current Zola site, run `zola serve` in another terminal
and open <http://127.0.0.1:1111/>.
