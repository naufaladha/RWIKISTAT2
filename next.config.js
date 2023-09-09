const withTM = require('next-transpile-modules')(['pdfjs-dist']); 

// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**"
    }]
  },
  webpack: (config, { isServer }) => {
    // Only run in client-side
    if (!isServer) {
      config.module.rules.push({
        test: /pdf.worker.min.js$/,
        use: 'raw-loader',
      });

      // Added this fallback for the 'tls' and 'fs' modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        tls: false,
        fs: false,
      };
    }

    return config;
  },
}

module.exports = withTM(nextConfig);
