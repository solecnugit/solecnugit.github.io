# Dr.avx Development Files

This directory contains both the original JSX version and the compiled version of the Dr.avx landing page.

## File Structure

### HTML Files
- **`dravx.html`** - Original version with JSX (requires Babel in browser)
  - Uses local library files from `./lib/`
  - JSX is transpiled in the browser at runtime
  - Easier to develop and debug
  
- **`dravx-compiled.html`** - Compiled version (production-ready)
  - Uses local library files from `./lib/`
  - JSX pre-compiled to JavaScript (app.js)
  - Faster load time (no Babel overhead)
  - **Recommended for production use**

### JavaScript Files
- **`app.jsx`** - React component source code (JSX format)
- **`app.js`** - Compiled JavaScript (automatically generated from app.jsx)

### Library Files (`lib/`)
All dependencies are included locally:
- `react.production.min.js` (10KB)
- `react-dom.production.min.js` (129KB)
- `babel.min.js` (3.0MB) - only needed for dravx.html
- `tailwindcss.js` (398KB)
- `lucide.min.js` (372KB)

### Build Files
- `.babelrc` - Babel configuration
- `package.json` - Node.js dependencies
- `node_modules/` - Build-time dependencies

## Development Workflow

### To modify the page:

1. Edit `app.jsx` with your changes
2. Recompile to JavaScript:
   ```bash
   npm install  # if node_modules doesn't exist
   npx babel app.jsx --out-file app.js
   ```
3. Test with `dravx-compiled.html`

### Quick Testing
For quick iterations, you can edit `dravx.html` directly (the script tag contains JSX that's transpiled in-browser).

## Performance Comparison

| Version | Initial Load | Notes |
|---------|-------------|-------|
| `dravx.html` | ~3.5MB | Includes 3MB Babel (transpiles JSX in browser) |
| `dravx-compiled.html` | ~0.5MB | Pre-compiled, no Babel needed |

**Recommendation:** Use `dravx-compiled.html` for production deployment.

## Deployment

For production, only these files are needed:
- `dravx-compiled.html`
- `app.js`
- `lib/` directory (except `babel.min.js`)

The build tools (`package.json`, `node_modules/`, `.babelrc`) are not needed in production.

