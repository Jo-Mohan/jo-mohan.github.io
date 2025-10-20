# Student Portfolio Website

This project is a simple, **minimalist personal website** designed for a master's or PhD student.  It follows a soft aesthetic inspired by Anthropic's Claude branding—warm rust tones and off‑white neutrals combined with rounded corners and subtle shadows—to convey professionalism and approachability【832974945123559†L88-L103】.  The website is built with semantic HTML5, CSS and a small amount of JavaScript, and it is ready to be deployed on **GitHub Pages**.

## Features

- Four distinct pages—**Home**, **Visualizations**, **Blog** and **Work**—each with a consistent navigation bar for easy orientation【716638492286674†L270-L277】.
- A responsive layout that adapts to different screen sizes; a mobile navigation toggle appears on small screens.
- Colour palette and typography defined as CSS variables, making it straightforward to change the theme.
- Accessible design practices: semantic tags, clear headings, high contrast, alternative text for images, and focus styles【658675121105025†L82-L132】.
- Smooth fade‑in animations that respect the user’s `prefers‑reduced‑motion` setting【658675121105025†L136-L149】.
- An example bar chart implemented with Chart.js on the Visualizations page.

## Project Structure

```
student-website/
├── index.html            # Home page
├── visualizations.html   # Data visualizations gallery
├── blog.html             # Blog posts about videogames
├── work.html             # Academic research and professional projects
├── styles.css            # Site-wide styles (colour palette, layout, responsive rules)
├── scripts.js            # JavaScript for navigation toggle, active links and Chart.js
└── README.md             # This file
```

### Customizing Content

All of the text and placeholder elements can be edited directly in the HTML files.  For instance:

- **Home page (`index.html`)** – Update the introduction paragraphs and personal greeting to reflect your own background.
- **Visualizations page** – Replace the sample Chart.js data in `scripts.js` with your own datasets, and replace the placeholder images in the gallery section with screenshots or graphics from your research.  Make sure to include descriptive `alt` text【658675121105025†L84-L110】.
- **Blog page** – Create additional `<article>` elements for each post.  Each article should have an `<h2>` title, a publication date (`<p class="meta">`), a summary paragraph and a “Read more…” link.
- **Work page** – Add or remove cards in the Research and Projects sections.  Each card contains a heading, descriptive paragraph and a link to the paper or project.  Use clear link text so users understand where each link goes【658675121105025†L183-L205】.

### Customizing the Theme

The colour palette, spacing and typography are defined at the top of **`styles.css`** using CSS custom properties.  To adjust the theme:

1. Open `styles.css` and locate the `:root` selector.  Variables such as `--color-primary`, `--color-secondary` and `--color-background` control the accent colours, hover states and page background.  Modify these values to suit your taste.
2. Update `--radius` to change the roundness of cards and buttons, and `--transition` to alter animation timing.
3. You can also change the font stack in the `body` rule to use your preferred typefaces.

If you add new components or interactive elements, try to follow the existing design language: soft edges, muted colours and generous spacing.  Refer to accessible design guidelines—keep text left‑aligned, maintain adequate line height and avoid relying on colour alone to convey information【658675121105025†L116-L132】【658675121105025†L136-L149】.

## Deployment on GitHub Pages

GitHub Pages provides free hosting for static websites.  According to GitHub’s documentation, you can publish a website from a repository named `<username>.github.io`; GitHub will automatically serve the contents of this repository as a website【726918579035644†L98-L117】.  Follow these steps to deploy your portfolio:

1. **Create a new repository** on GitHub named `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with your actual GitHub username.
2. Initialize the repository with a README (optional) and choose public visibility.
3. Clone the repository locally and copy all files from the `student-website` folder into the root of your clone.
4. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Add personal website"
   git push origin main
   ```

5. After pushing, navigate to `https://YOUR_USERNAME.github.io` in your browser.  GitHub will automatically build and deploy the site using `index.html` as the entry point【726918579035644†L98-L117】.  It may take a minute or two for the site to become available.

### Updating the Site

To make changes after the initial deployment, edit the HTML, CSS or JavaScript files locally.  Commit and push your updates to the `main` branch of your GitHub Pages repository; your changes will automatically appear on the live site.  Remember to maintain accessible design practices and test your site on different devices and with screen readers when possible.

## License

This project is released under the MIT License.  You are free to use, modify and distribute it for your own portfolio or academic purposes.

