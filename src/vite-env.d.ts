/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type InferArray<T> = T extends (infer U)[] ? U : never;
