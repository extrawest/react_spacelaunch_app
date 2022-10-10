/* eslint-disable */
export default {
  displayName: 'client-app',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/client-app',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
