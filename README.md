# Fan Liu academic website

Prepared for **https://liuf76.github.io/**.

This package contains the complete website, including the research image and downloadable CV. It is ready to publish; preparing or downloading these files does not itself activate the GitHub address.

## Publish using the GitHub website

1. Sign in to GitHub as **liuf76**.
2. Create a repository named exactly **liuf76.github.io**. Select **Public** for free GitHub Pages hosting, turn on **Add README**, and create the repository. If you already have a repository with this exact name, use that repository and review its existing contents before replacing files.
3. Unzip this package on your computer. In your repository, choose **Add file → Upload files**. Drag the extracted files and the entire **assets** folder into the upload area. Upload the contents of the extracted folder, not the ZIP or the outer folder itself. The repository's top level must contain **index.html**, **styles.css**, **main.js**, **README.md**, and **assets**. The package also includes **.nojekyll** to serve the files without Jekyll processing; include it if visible in your file picker. The ordinary filenames in this package also work with GitHub's default processing if that file is omitted.
4. Click **Commit changes** to save the uploaded files to **main**.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then branch **main** and folder **/(root)**. Click **Save**. Leave **Custom domain** empty.
6. Allow up to 10 minutes for publishing. The Pages settings page will show the published address. Open **https://liuf76.github.io/** to view the website. If GitHub reports a failed deployment, open the **Actions** tab for the error.

GitHub's official instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit the website later

- **Text, publications, teaching and links:** edit `index.html` in GitHub using the pencil button, then commit the changes. The sections are identified by `id="about"`, `id="platform"`, `id="research"`, `id="publications"`, `id="teaching"`, `id="talks"`, and `id="contact"`.
- **CV:** replace `assets/Fan_Liu_CV.pdf`, keeping that filename so the existing links continue to work.
- **Fonts, colors and layout:** edit `styles.css`.
- **Mobile menu behavior:** edit `main.js`.
- You can also request revisions in the original ChatGPT conversation. Changes must be uploaded or pushed to this GitHub repository to update the GitHub website; editing the separate ChatGPT-hosted draft does not automatically synchronize GitHub.

Each change committed to the configured publishing branch triggers a website update.

## Research image credit

The fluorescence microscopy image is credited to the researchers through MIT News. Its source and applicable reuse terms are at:
https://news.mit.edu/2025/mit-engineers-uncover-surprising-reason-why-tissues-are-flexible-rigid-0620

## Technical details

Plain HTML, CSS and JavaScript. No package installation, build command, database, external API or paid hosting plan is required. The files are arranged for a user site at the repository root. No custom-domain configuration is included.

## Portrait and microscopy movies

- Current portrait: `assets/fan-liu-graduation-hq.jpg`, optimized from the supplied 2048×1536 IMG_2951.JPG original. The full composition is retained in the file; CSS uses a 4:5 frame with the subject centered. The previous portraits remain in the assets folder.
- Compression assay: `assets/a549-compression.mp4`.
- Tracer experiments: `assets/fluid-influx.mp4` and `assets/fluid-efflux.mp4`.
- Each video has a corresponding `-poster.jpg`. Videos use H.264/yuv420p MP4 with faststart, preserve the original frames and acquisition timing, and have no audio. Playback speed differs from acquisition time as shown by the embedded timestamps.
- Players load on demand, have native controls, and do not autoplay. Playing another movie pauses the previous one.
- `assets/Platform.svg` is Fan Liu’s supplied diagram. It appears under Engineering platforms within Research; the force readout is the microbalance. The previous standalone Platform navigation item has been removed.
- The fluorescence movies are complementary tracer experiments. Efflux uses hyperosmotic conditions (750 mM sucrose), not mechanical compression. See Supplementary Fig. 9 of the linked Nature Physics paper.

## Research organization

Three question-led themes: tissue mechanics and transport; engineering platforms; cellular delivery and biofabrication. Supplied figures `teng-intracellular-delivery.svg` and `teng-cell-printing.webp` illustrate the ACS Nano and Nano Energy papers. Controlled drug release is identified as a potential application of the printed microspheres, not a demonstrated delivery assay. The CV remains accessible in About and Contact.

The cell-printing WebP is a lossless 1600×879 rendering of the complete supplied PDF page. The electroporation SVG preserves its embedded source image. All original figure panels are retained.
