module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel to transform .js and .jsx files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@web3-storage)', // Allow Jest to transpile the @web3-storage package
  ],
};
