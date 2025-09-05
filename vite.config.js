import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// عدل base بالاسم بتاع الريبو بتاعك
export default defineConfig({
  plugins: [react()],
  base: '/BankRequesting/'
})

