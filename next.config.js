module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = { fs: false, path: false };

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
