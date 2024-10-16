export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use babel-jest to transform JS/JSX to ESM
  },
};
