import { ReactEnv } from '@teambit/react.react-env';
import type { ReactEnvInterface } from '@teambit/react.react-env';
import { Compiler } from '@teambit/compiler';
// import { TemplateList } from "@teambit/generator";
// import { ReactComponentTemplate } from "@teambit/react.generator.react-templates";
// import { TypeScriptExtractor } from "@teambit/typescript";
import { ReactPreview } from '@teambit/preview.react-preview';
import { EnvHandler } from '@teambit/envs';
import {
  TypescriptCompiler,
  resolveTypes,
  // TypescriptTask,
} from '@teambit/typescript.typescript-compiler';
import { ESLintLinter } from '@teambit/defender.eslint-linter';
// import { EslintTask } from "@teambit/defender.eslint-linter";
import { ESLint as ESLintLib } from 'eslint';
// import webpack from "webpack";
// import { JestTask, JestTester } from "@teambit/defender.jest-tester";
import { JestTester } from '@teambit/defender.jest-tester';
import { PrettierFormatter } from '@teambit/defender.prettier-formatter';
import typescript from 'typescript';
import { Tester } from '@teambit/tester';
// import { Pipeline } from "@teambit/builder";
import { Preview } from '@teambit/preview';
// import { SchemaExtractor } from "@teambit/schema";
// import webpackTransformer from "./config/webpack.config";
// import { PackageGenerator } from "@teambit/pkg";

export class MyReactEnv extends ReactEnv implements ReactEnvInterface {
  /**
   * name of the environment. used for friendly mentions across bit.
   */
  name = 'my-custom-react';

  /**
   * icon for the env. use this to build a more friendly env.
   * uses react by default.
   */
  icon = 'https://static.bit.dev/extensions-icons/react.svg';

  /**
   * return an instance of a Compiler. use components like typescript-compiler (teambit.typescript/typescript-compiler)
   * or our babel-compiler (teambit.compilation/babel-compiler).
   * @example
   * return TypescriptCompiler.from({
   *  tsconfig: require.resolve("./config/tsconfig.json"), // path to tsconfig.json
   *  types: resolveTypes(__dirname, ["./types"]),
   *  typescript,
   * });
   */

  // TODO: make sure we only run compiler once @david.
  compiler(): EnvHandler<Compiler> {
    return TypescriptCompiler.from({
      tsconfig: require.resolve('./config/tsconfig.json'),
      types: resolveTypes(__dirname, ['./types']),
      typescript,
    });
  }

  /**
   * returns an instance of a Bit tester implementation. use components like mocha-tester or
   * jest-tester or [build your own](https://bit.dev/docs/tester/implement-tester).
   */
  tester(): EnvHandler<Tester> {
    // TODO @gilad: check jest tester on watch.
    // TODO: upgrade to jest 29.
    return JestTester.from({
      jest: require.resolve('jest'),
      config: require.resolve('./config/jest.config'),
    });
  }

  /**
   * return an instance of a Bit preview instance. used for preview purposes.
   * base preview is a general purpose webpack preview.
   */
  preview(): EnvHandler<Preview> {
    return ReactPreview.from({
      /**
       * override the default docs template for components.
       */
      docsTemplate: require.resolve('./preview/docs'),
      /**
       * mounters are used to mount components to DOM
       * during preview. use them for wrapping your components
       * with routing, theming, data fetching or other types
       * of providers.
       */
      mounter: require.resolve('./preview/mounter'),
      // webpackModulePath: require.resolve("webpack"),
      // webpackDevServerModulePath: require.resolve("webpack-dev-server")
      // transformers: [webpackTransformer],
    });
  }

  /**
   * returns an instance of the default ESLint.
   * config files would be used to validate coding standards in components.
   * bit will write the minimum required files in any workspace to optimize
   * for dev experience.
   */
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

  /**
   * used by bit's formatter. helps to standardize and automate
   * code styling. can be used a build task or using bit lint and common
   * ides.
   */
  formatter() {
    return PrettierFormatter.from({
      configPath: require.resolve('./config/prettier.config.js'),
    });
  }

  /**
   * a list of starters for new projects. this helps create a quick and
   * standardized
   */
  // starters() {
  //   return [new ReactWorkspaceStarter()];
  // }

  /**
   * set a list of component templates to use across your
   * workspaces. new workspaces would be set to include
   * your envs by default.
   */
  // generators() {
  //   return TemplateList.from([ReactComponentTemplate.from()]);
  // }

  /**
   * define the build pipeline for a component.
   * pipelines are optimized for performance and consistency.
   * making sure every component is independently built and tested.
   */
  // build() {
  //   // :TODO fix build task
  //   return Pipeline.from([
  //     TypescriptTask.from({
  //       tsconfig: require.resolve("./config/tsconfig.json"),
  //       types: resolveTypes(__dirname, ["./types"]),
  //       typescript,
  //     }),
  //     EslintTask.from({
  //       tsconfig: require.resolve("./config/tsconfig.json"),
  //       eslint: ESLintLib,
  //       configPath: require.resolve("./config/eslintrc.js"),
  //       // resolve all plugins from the react environment.
  //       pluginsPath: __dirname,
  //       extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
  //     }),
  //     JestTask.from({
  //       config: require.resolve("./config/jest.config"),
  //       jest: require.resolve("jest"),
  //     }),
  //   ]);
  // }

  /**
   * add build tasks to execute upon [snap](https://bit.dev/docs/snaps).
   * use the snap pipeline for staging and test deployments
   */
  // snap() {
  //   return Pipeline.concat(this.build(), Pipeline.from([]));
  // }

  /**
   * add build tasks to execute upon [tag](https://bit.dev/docs/tags).
   * use the tag pipeline for deployments, or other tasks required for
   * publishing a semantic version for a component.
   */
  // tag() {
  //   return Pipeline.from([]);
  // }

  /**
   * configure and control the packaging process of components.
   */
  // package() {
  //   return PackageGenerator.from({
  //     packageJson: {
  //       license: 'MIT'
  //     },
  //     npmIgnore: []
  //   });
  // }

  /**
   * returns an instance of the default TypeScript extractor.
   * used by default for type inference for both JS and TS.
   */
  // schemaExtractor(): EnvHandler<SchemaExtractor> {
  //   return TypeScriptExtractor.from({
  //     tsconfig: require.resolve("./config/tsconfig.json"),
  //   });
  // }
}

export default new MyReactEnv();
