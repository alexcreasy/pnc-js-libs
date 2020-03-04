import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
    input: 'src/index.js',
    output: {
      file: 'dist/pnc-js-libs.js',
      format: 'umd',
      name: "PncJsLibs"
    },
    plugins: [resolve(), commonjs()]
  };
