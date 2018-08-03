module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.woff$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      ]
    });
    return config;
  }
};
