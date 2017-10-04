  var config = {
   entry: './main.js',

   output: {
      path:'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 1234,
      host: '0.0.0.0'
   },
   node: {
      fs: 'empty',
      child_process: 'empty'
    },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
