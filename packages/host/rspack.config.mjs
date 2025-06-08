import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import pkg from './package.json' with { type: 'json' };

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
      name: 'host',
      filename: 'host.container.js.bundle',
      remotes: {
        userapp: 'userapp@http://localhost:9000/android/userapp.container.js.bundle',
      },
      shared: Object.fromEntries(
        Object.entries(pkg.dependencies).map(([name, version]) => [name, { singleton: true, requiredVersion: version, eager: true }]),
      ),
    }),
  ],
};
