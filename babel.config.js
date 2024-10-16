export default {
  presets: [
    [
      '@babel/preset-env', // Transpiles modern JavaScript
      {
        targets: {
          esmodules: true, // Ensures Babel outputs ESM instead of CJS
        },
      },
    ],
    '@babel/preset-react', // Transpiles JSX
  ],
};
