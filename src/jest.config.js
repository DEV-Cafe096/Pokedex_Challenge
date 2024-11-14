import module from 'module';
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', // Ignora arquivos de estilo
        '\\.(svg|ico|png|jpg|jpeg|gif|mp3)$': '<rootDir>/src/__mocks__/fileMock.js', // Ignora imagens
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Para transformar arquivos .js e .jsx
    },
    extensionsToTreatAsEsm: ['.jsx'], // Trata arquivos .jsx como módulos ES
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};
