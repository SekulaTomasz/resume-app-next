module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  cleanupIDs: false,
                  prefixIds: false,
                  removeDimensions: false,
                  removeViewBox: false
                }
              ]
            }
          }
        }
      ],
    });

    return config;
  },
}
