import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.FIP_API,
  documents: 'app/**/*.tsx',
  generates: {
    'app/lib/graphql/': {
      preset: 'client',
    },
    'app/lib/graphql/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
