import { installGlobals } from '@remix-run/node'
import '@testing-library/jest-dom'
import { afterAll, afterEach } from 'vitest'

installGlobals()

// one time setup here
// fs.copyFileSync(BASE_DATABASE_PATH, DATABASE_PATH)

afterEach(() => {})
afterAll(async () => {})