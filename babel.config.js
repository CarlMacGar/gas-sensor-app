module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'], // Añadir el preset de Babel para mayor compatibilidad
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowUndefined: true,
    }]
  ],
};
