# Build Instructions for Dr.avx Landing Page

## Quick Reference

### To recompile after changes:
```bash
cd dev
npx babel app.jsx --out-file app.js
```

### Files to commit to git:
✅ Commit these:
- `dravx.html` (dev version with JSX)
- `dravx-compiled.html` (production version)
- `app.jsx` (source)
- `app.js` (compiled, for production)
- `lib/` directory (all libraries)
- `.babelrc` (Babel config)
- `package.json` (build config)
- `.gitignore`
- `README.md`
- `BUILD.md`

❌ Don't commit:
- `node_modules/` (too large, can be regenerated)
- `package-lock.json` (optional)

## First Time Setup

If you're setting up on a new machine:

```bash
cd dev
npm install
```

This will install Babel and its dependencies to `node_modules/`.

## Making Changes

1. **Edit the source**: Modify `app.jsx`
2. **Recompile**: Run `npx babel app.jsx --out-file app.js`
3. **Test**: Open `dravx-compiled.html` in a browser
4. **Commit**: Commit both `app.jsx` and `app.js`

## Alternative: In-browser Development

For rapid prototyping, you can also edit the inline script in `dravx.html` directly. The JSX will be transpiled in the browser (slower, but no build step needed).

## Production Deployment

For production, use `dravx-compiled.html`. It's faster because:
- JSX is pre-compiled
- No 3MB Babel library to download
- Instant page load

## File Sizes

- Original with CDN: Babel (3MB CDN download)
- Compiled version: No Babel needed
- Savings: ~3MB and browser compile time

