import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.cjs',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ],
};
