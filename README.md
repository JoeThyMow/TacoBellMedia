# Taco Bell Media

A news website built with Jekyll and hosted free on GitHub Pages.

## Publish on GitHub Pages

1. Create a GitHub repository, such as `taco-bell-media`.
2. Upload all the files and folders in this project to the **root** of that repository (not inside an extra `taco-bell-media` folder).
3. Edit `_config.yml`:
   - For `https://USERNAME.github.io/taco-bell-media/`, set `url: "https://USERNAME.github.io"` and `baseurl: "/taco-bell-media"`.
   - For a repository named `USERNAME.github.io`, set `url: "https://USERNAME.github.io"` and `baseurl: ""`.
4. In GitHub, open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
5. Wait for the Pages deployment. Your site will be live at the URL shown in Settings → Pages.

## Publish an article

Create a Markdown file in `_posts/`, named `YYYY-MM-DD-your-headline.md`.

```markdown
---
layout: post
title: "Your Headline Here"
date: 2026-11-11 12:00:00 -0500
author: "Your Name"
category: "Politics"
description: "One sentence summarizing the article."
image: "/assets/images/example.jpg"
image_alt: "Description of the photo"
---

Your opening paragraph goes here.

## Subheading

More article text here.
```

Upload an image to `assets/images/example.jpg` if using the `image` field. Otherwise remove `image` and `image_alt`.

Commit the new file. GitHub Pages rebuilds automatically. Your article appears on the homepage and article archive and gets its own URL.

## Folder structure

- `_posts/` — **all published articles**
- `_layouts/` — page templates
- `assets/css/` — design
- `assets/js/` — article search
- `assets/images/` — article images
- `index.html` — homepage
- `articles.html` — searchable archive
- `about.md` — about page
- `_config.yml` — site configuration

## Notes

GitHub Pages hosts a static website: no database or server-side logins are included. Search filters article titles, descriptions, authors, and categories locally. You can edit the site directly using GitHub's web interface.

This is an independent publication template and is not affiliated with Taco Bell restaurants.
