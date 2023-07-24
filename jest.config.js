const preset = String(process.env.TEST_PRESET ?? '@swc/jest').toLowerCase();

switch (preset) {
  case 'ts-jest':
    module.exports = {
      preset: 'ts-jest',
    };
    break;

  case '@swc/jest':
    module.exports = {
      moduleNameMapper: {
        '^.+\\.(t|j)sx?$': '@swc/jest',
      },
    };
    break;

  default:
    throw new Error('Please use either ts-jest or @swc/jest as the TEST_PRESET');
}


