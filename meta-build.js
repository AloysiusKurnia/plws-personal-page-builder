const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'node-dist/bundle.js',
    minify: true,
    sourcemap: true,
    target: 'es2015',
    format: 'cjs',
    platform: 'node',
    packages: 'external',
}).catch(() => process.exit(1));

// I say meta-build because it builds the builder. Heh.