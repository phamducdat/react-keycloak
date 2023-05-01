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
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true, // Resolve browser-compatible modules
      preferBuiltins: true,
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
