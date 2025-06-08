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

export default env => {
  const {mode, platform = process.env.PLATFORM} = env;
  return {
    context: __dirname,
    entry: './index.js',
    experiments: {
      incremental: mode === 'development',
    },
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
        userapp: `userapp@http://localhost:9000/${platform}/userapp.container.js.bundle`,
      }
    }),
    ],
  }
};
