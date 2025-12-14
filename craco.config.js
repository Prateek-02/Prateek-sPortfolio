module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find and modify source-map-loader rules to ignore @mediapipe/tasks-vision
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.enforce === 'pre' && rule.use) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes('source-map-loader')) {
              // Add exclude pattern for @mediapipe/tasks-vision
              if (!rule.exclude) {
                rule.exclude = [];
              }
              if (Array.isArray(rule.exclude)) {
                rule.exclude.push(/node_modules\/@mediapipe\/tasks-vision/);
              } else {
                rule.exclude = [rule.exclude, /node_modules\/@mediapipe\/tasks-vision/];
              }
            }
          });
        }
      });

      return webpackConfig;
    },
  },
};

