import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-server';

export default {
  input: 'client/index.js',
  output: {
    file: `${__dirname}/bundle/bundle.js`,
    format: 'cjs'
  },
  external: [
    "react",
    "react-dom"
  ], 
  plugins: [
    resolve(),
    babel({
      exclude: 'node_mobules/**'
    }),
    serve('assets')
  ]
}