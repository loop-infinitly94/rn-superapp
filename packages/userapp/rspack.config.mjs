import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

import pkg from './package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default {
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
  module: {
    rules: [
      ...Repack.getJsTransformRules(),
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [new Repack.RepackPlugin(),
  new Repack.plugins.ModuleFederationPluginV2({
    name: 'userapp',
    filename: 'userapp.container.js.bundle',
    exposes: {
      './App': './App.tsx', // Expose the main App component
    },
    shared: Object.fromEntries(
      Object.entries(pkg.dependencies).map(([name, version]) => [name, { singleton: true, requiredVersion: version, eager: true }]),
    ),
  }),
  ],
};
