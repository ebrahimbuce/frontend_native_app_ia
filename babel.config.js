// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'], // O 'module:metro-react-native-babel-preset' si no usas Expo
  plugins: [
    'react-native-reanimated/plugin', // ¡Asegúrate de que esta línea sea la ÚLTIMA!
  ],
};
