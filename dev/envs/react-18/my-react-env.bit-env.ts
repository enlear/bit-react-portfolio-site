import { ReactEnv } from '@teambit/react.react-env';
import type { ReactEnvInterface } from '@teambit/react.react-env';
import { Compiler } from '@teambit/compiler';
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import {
  TypescriptCompiler,
  resolveTypes,
} from '@teambit/typescript.typescript-compiler';
import { ESLintLinter } from '@teambit/defender.eslint-linter';
import { ESLint as ESLintLib } from 'eslint';
import { JestTester } from '@teambit/defender.jest-tester';
import { PrettierFormatter } from '@teambit/defender.prettier-formatter';
import typescript from 'typescript';
import { Tester } from '@teambit/tester';
import { Preview } from '@teambit/preview';

export class MyReactEnv extends ReactEnv implements ReactEnvInterface {
  name = 'react-with-mui';

  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  compiler(): EnvHandler<Compiler> {
    return TypescriptCompiler.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      types: resolveTypes(__dirname, ['./types']),
      typescript,
    });
  }

  tester(): EnvHandler<Tester> {
    return JestTester.from({
      jest: require.resolve('jest'),
      config: require.resolve('./config/jest.config'),
    });
  }

  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      docsTemplate: require.resolve('./preview/docs'),
      mounter: require.resolve('./preview/mounter'),
      hostDependencies: [
        '@teambit/mdx.ui.mdx-scope-context',
        '@mdx-js/react',
        'react',
        'react-dom',
        '@mui/material',
      ],
    });
  }

  linter() {
    return ESLintLinter.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      eslint: ESLintLib,
      configPath: require.resolve('./config/eslintrc.js'),
      // resolve all plugins from the react environment.
      pluginsPath: __dirname,
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    });
  }

  formatter() {
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
    });
  }
}

export default new MyReactEnv();
