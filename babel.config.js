module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
             "@assets": "./assets",
          },
        },
      ],
      // React Native Paper sometimes suggests adding this for gestures support:
      'react-native-reanimated/plugin',
    ],
  };
};
