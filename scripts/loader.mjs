import fs from 'fs';
import { fileURLToPath } from 'url';

export async function resolve(specifier, context, defaultResolve) {
  let cleanSpecifier = specifier;
  const isRaw = specifier.includes('?raw');
  if (isRaw) {
    cleanSpecifier = specifier.replace('?raw', '');
  }

  try {
    const resolved = await defaultResolve(cleanSpecifier, context);
    if (isRaw) {
      return { ...resolved, url: resolved.url + '?raw' };
    }
    return resolved;
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      const candidates = [
        cleanSpecifier + '.js',
        cleanSpecifier + '.jsx',
        cleanSpecifier + '/index.js',
      ];
      for (const cand of candidates) {
        try {
          const resolved = await defaultResolve(cand, context);
          return resolved;
        } catch {}
      }
    }
    throw err;
  }
}

export async function load(url, context, defaultLoad) {
  if (url.includes('.md?raw') || url.endsWith('.md')) {
    const filePath = fileURLToPath(url.split('?')[0]);
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${JSON.stringify(content)};`,
    };
  }
  return defaultLoad(url, context);
}
