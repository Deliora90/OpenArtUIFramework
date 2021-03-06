module.exports = {
  roots: ['./src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@icons/(.*)': '<rootDir>/src/icons/$1',
  },
};
