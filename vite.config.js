import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
    const base = mode === 'github'
        ? '/contek-2026/'
        : '/';

    return {
        base,

    }
})