import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/date-lib.js',
  output: [
    {
      file: 'dist/date-lib.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/date-lib.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/date-lib.umd.js',
      format: 'umd',
      name: 'DateLib',
      sourcemap: true
    },
    {
      file: 'dist/date-lib.min.js',
      format: 'umd',
      name: 'DateLib',
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
}; 