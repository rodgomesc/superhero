module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@store': './src/store',
          '@pages': './src/pages',
          '@sharedInterfaces': './src/sharedInterfaces',
        },
      },
    ],
  ],
};
