import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  clean: true,
  minify: true,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  target: 'esnext',
})
