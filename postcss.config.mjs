import { minify } from 'next/dist/build/swc';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    lightningcss: {minify: true},
  },
};

export default config;
