module.exports = {
  presets: ['module:@react-native/babel-preset', "nativewind/babel"],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src', "./"],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', ".jsx"],
        alias: {
          "tests": ["tests/*"],
          "@components/*": ["src/res/components/*"],
          "@layout/*": ["src/res/layout/*"],
          "@": "./"
        }
      }
    ]
  ]
};
