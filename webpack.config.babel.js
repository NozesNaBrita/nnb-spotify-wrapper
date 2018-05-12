import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  mode: 'development',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'nnbSpotifyWrapper',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {test: /\.js$/, loader: 'babel-loader', include}
    ]
  },
  node: {
    fs: "empty"
  }
}