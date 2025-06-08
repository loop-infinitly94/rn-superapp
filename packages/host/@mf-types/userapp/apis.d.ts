
    export type RemoteKeys = 'userapp/App';
    type PackageType<T> = T extends 'userapp/App' ? typeof import('userapp/App') :any;