# Fan Liu academic website

Live site: https://liuf76.github.io/

The site uses plain HTML, CSS and JavaScript and publishes from the repository's `main` branch through GitHub Pages.

## Edit the website

- `index.html`: research-led home page.
- `about.html`: biography, portrait and education.
- `research.html`: research overview.
- `mechanics.html`, `tools.html`, `models.html`: research directions.
- `publications.html`: selected publications.
- `teaching.html`: teaching and professional service, including the BMES session-chair role.
- `talks.html`: invited talks and a separate selected-conference subsection.
- `original.css` and `site.css`: shared design.
- `site.js`: navigation, video behavior and redirects for the previous homepage's section links.
- `assets/`: original scientific figures, movies, portrait and CV.

The home page uses the supplied microscopy image `assets/intercellular-structure.webp`. The portrait appears on About. Research text, publication links, figures and movies are preserved from the previous site.

## CV

`assets/Fan_Liu_CV.pdf` is the November 2, 2026 approved PDF, used without rewriting or recompiling its contents. Every current-page CV link includes `?v=20261106` to avoid showing a cached older copy. When replacing the PDF in future, update this version query in the nine pages.

## Preserved long-page version

The complete site before the November 6, 2026 multipage update is preserved in branch [`backup/long-page-2026-11-06`](https://github.com/liuf76/liuf76.github.io/tree/backup/long-page-2026-11-06), at commit `7625b76c38b68dd152f2f95182761d1166d61d1f`.

A browsable copy is also available at https://liuf76.github.io/long-page/. That directory has its own original assets and CV so subsequent changes to the main site do not alter the archive. Its page has a `noindex` directive to avoid duplicate search results.

To restore the long-page version later, create a normal commit on `main` that copies `index.html`, `styles.css`, `main.js`, and `assets/` from the backup branch. You may keep the current root CV if desired. The additional multipage files can remain or be removed in that same commit. No force reset or history rewrite is necessary.

## Publication and verification

Preparing files or updating a separate preview does not publish GitHub Pages. A commit on the configured publishing branch triggers deployment. Check the Pages deployment status and then verify the live home page, About, research navigation, CV, and `/long-page/` archive.

Only the production pages, their styles/scripts, assets and documentation belong in the deployment. Preview helpers such as `review.html` and `inline-review.html` are not required.

## Visitor analytics

The existing asynchronous GoatCounter script is retained on each current page, using https://fanliu.goatcounter.com/. Each page navigation records a pageview. Sign in to GoatCounter to view the private dashboard.

## Scientific media

Original supplied media and links are retained. Movies have native controls and load on demand. Microscopy movies preserve the original acquisition timing; embedded timestamps distinguish playback from acquisition time. The tracer efflux experiment uses hyperosmotic conditions (750 mM sucrose), not mechanical compression. See Supplementary Fig. 9 of the linked Nature Physics paper.

`assets/Platform.svg` is the supplied engineering-platform diagram; the force readout is the microbalance. Research overview arrows connect the three research directions. Earlier TENG work remains under engineering tools, with the ACS Nano and Nano Energy links. Controlled drug release is described as a potential application.

The microscopy backdrop is a web-optimized conversion of the supplied TIFF; its original source and reuse terms are linked at https://news.mit.edu/2025/mit-engineers-uncover-surprising-reason-why-tissues-are-flexible-rigid-0620.
