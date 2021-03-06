import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

let version = require('../package.json').version,
  author = require('../package').author.name;

const banner = `/*
 * PoPo ${version}, a JS UI library for data visualization and large screen.
 * https://github.com/shunok/PoPo (c) 2017-2018 ${author}
 */`;

export default {
  entry: 'src/index.js',
  moduleName: 'P',
  format: 'umd',
  dest: 'dist/popo.src.js',
  banner: banner,
  plugins: [
    json(),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};