export default {

  clearMocks: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
