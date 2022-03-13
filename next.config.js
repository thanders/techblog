      // next.config.js
      const withMDX = require("@next/mdx")({
        extension: /\.mdx?$/
      });

      const withPlugins = require('next-compose-plugins');
      const withTM = require('next-transpile-modules')(['badenweiler-ui']);
      const redirects = {
        async redirects() {
          return [
            {
              source: '/reviews',
              destination: '/',
              permanent: true,
            },
            {
              source: '/tutorials',
              destination: '/',
              permanent: true,
            },
          ];
        },
      };

      module.exports = withPlugins([
        [
          withMDX({pageExtensions: ["js", "jsx", "md", "mdx"]}),
          withTM
        ],
        {reactStrictMode: true},
        [redirects]
      ]);

