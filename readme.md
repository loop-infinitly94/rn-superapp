# rn-superapp

A monorepo React Native super app with modular architecture, supporting multiple apps (host, userapp) and shared code.

## Monorepo Structure

```
.
├── package.json
├── pnpm-workspace.yaml
├── packages/
│   ├── host/      # Main host React Native app
│   └── userapp/   # Example user-facing app
```

## Getting Started

### Prerequisites

- Node.js (>= 16)
- [pnpm](https://pnpm.io/) (recommended)
- Xcode (for iOS)
- Android Studio (for Android)
- Watchman (macOS)

### Install Dependencies

```sh
pnpm install
```

### Running the Host App

#### iOS

```sh
cd packages/host
pnpm install
npx pod-install
pnpm run ios
```

#### Android

```sh
cd packages/host
pnpm install
pnpm run android
```

### Scripts

- `pnpm run ios` - Run the app on iOS simulator
- `pnpm run android` - Run the app on Android emulator/device
- `pnpm run start` - Start Metro bundler

### Project Structure

- `src/navigation/` - Navigation setup (e.g., MainNavigator)
- `src/screens/` - App screens (e.g., Login, Register, Profile)
- `src/context/` - React context providers (e.g., AuthContext)
- `src/components/` - Shared UI components

### Development

- Use [pnpm workspaces](https://pnpm.io/workspaces) for managing dependencies across packages.
- Each app (host, userapp) has its own entry point and configuration.

### Troubleshooting

- If you encounter build issues, try cleaning the build cache:
  ```sh
  cd packages/host
  pnpm run clean
  ```
- For Android, ensure your Android SDK and NDK paths are set correctly.
- For iOS, run `npx pod-install` after installing dependencies.
