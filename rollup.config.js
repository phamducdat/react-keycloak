import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';
import replace from 'rollup-plugin-replace';
import './env.mjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(packageJson.peerDependencies || {})],
  onwarn: (warning, warn) => {
    // Ignore the "this" has been rewritten to "undefined" warnings
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    // Pass on other warnings
    warn(warning);
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true, // Resolve browser-compatible modules
      preferBuiltins: true,
    }),
    replace({
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.ANOTHER_VARIABLE': JSON.stringify(
        process.env.ANOTHER_VARIABLE
      ),
    }),

    commonjs(),
    json(),
    builtins(),
    typescript({
      typescript: require('typescript'),
    }),
    terser(),

    nodeResolve(),
    filesize(),
    del({ targets: ['dist/*'] }),
  ],
};
