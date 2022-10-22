import vue from "rollup-plugin-vue";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";  
import sucrase from "@rollup/plugin-sucrase";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    rootDir: "src",
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/dist/index.mjs",
      },
      {
        format: "cjs",
        file: "dist/dist/index.js",
      },
    ],
    plugins: [
      vue({
        css: true,
        compileTemplate: true,
      }),
      peerDepsExternal(),
      typescript(),
      scss(),
      resolve(),
    ],
  },
  sucrase({
    exclude: ["node_modules/**"],
    transforms: ["typescript", "jsx"],
  }),
];
