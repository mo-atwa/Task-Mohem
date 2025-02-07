import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/REPO_NAME/',  // استبدل REPO_NAME باسم المستودع
  plugins: [react()]
})
