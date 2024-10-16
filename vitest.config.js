/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [] } },
  test: {
    globals: true,
    include: ['./app/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./app/tests/setup.ts'],
    coverage: {
      include: ['app/**/*.{ts,tsx}'],
      all: true,
    },
  },
})