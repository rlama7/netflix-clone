// jest.node.config.js (For Backend Logic)
export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  mdouleFileExtensions: ['js', 'jsx'],
};
