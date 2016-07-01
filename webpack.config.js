module.exports={
  entry: './client.js',
  output:{
    path: '__dirname/public',
    filename:'client.js'
  },
  module:{
    loaders:[
    {
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', "react", "stage-2"]
      }
    }
    }]
  }
}