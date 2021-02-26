module.exports = {
    webpack: (config, options) => {
      config.module.rules.push(
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000' 
        },
        {
          test: /\.(mp4)(\?[a-z0-9=.]+)?$/,
          loader: 'file-loader' 
        }
      )
      return config
    },
  }