# Wisen Book Mart

A full-stack bookstore storefront built with Express, EJS, and Tailwind CSS.

## Overview

This application is a bookstore storefront that includes public store pages and an admin dashboard. The app uses server-rendered EJS templates, Tailwind CSS for styling, and Express as the web server.

## Features

- Product listing and category browsing
- Book detail pages
- Cart and checkout pages
- Admin area for managing books, categories, and orders
- Tailwind CSS build/watch support

## Project Structure

- `server.js` - application entry point
- `package.json` - scripts and dependencies
- `public/` - static assets (CSS, fonts, images, JS)
- `src/controllers/` - route handlers
- `src/routes/` - Express routes
- `views/` - EJS templates and partials
- `views/partials/` - shared UI components like navbar and footer

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm run dev
```

This starts the server with `nodemon`.

### Build Tailwind CSS

```bash
npm run build:css
```

### Watch Tailwind CSS

```bash
npm run watch:css
```

## Available Scripts

- `npm start` - start the server
- `npm run dev` - start the server in development mode with `nodemon`
- `npm run watch:css` - rebuild Tailwind CSS on changes
- `npm run build:css` - produce a minified Tailwind CSS output

## Notes

- Static content is served from `public/`
- Views are rendered from `views/`
- Admin routes are organized under `src/routes/adminRoutes.js`
- Store pages are organized under `src/routes/storeRoutes.js`

## License

This project does not include a license file. Add one if you plan to share or distribute it.
