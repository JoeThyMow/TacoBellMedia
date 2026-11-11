# Taco Bell Media — Purple Edition

Complete Jekyll website for GitHub Pages at https://joethymow.github.io/TacoBellMedia/

## Deployment
Upload the **contents** of this folder to the root of the `joethymow/TacoBellMedia` repository (not the containing folder). Replace existing files. In Settings → Pages, use the Jekyll GitHub Actions workflow.

## Publish an article
Add a file named `YYYY-MM-DD-story-title.md` to `_posts/` with front matter:

```yaml
---
layout: post
title: "Story headline"
date: 2026-11-11
author: Editorial Staff
category: Politics
description: "Short summary"
---

Write the story here.
```

The homepage and archive automatically display posts.

## Theme
Purple/white theme, bundled Taco Bell logo, and embedded CSS fallback in `_includes/site.css` to avoid unstyled pages. The Jekyll `relative_url` filter handles the `/TacoBellMedia` project path.
