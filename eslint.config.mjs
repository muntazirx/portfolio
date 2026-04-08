import js from "@eslint/js";

const eslintConfig = [
  js.configs.recommended,
  // ...compat.extends("next/core-web-vitals"), // Temporarily disabled due to circular reference with ESLint 9
  // ...compat.extends("next/typescript"), // Temporarily disabled due to circular reference
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
