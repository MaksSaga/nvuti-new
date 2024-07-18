import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        midnight: '#10111C', // Midnight
        charcoal: '#121420', // Charcoal
        onyx: '#161826', // Onyx
        sapphire: '#222537', // Sapphire
        steel: '#3E425C', // Steel
        slate: '#61657E', // Slate
        ocean: '#263E64', // Ocean
        navy: '#375582', // Navy
        azure: '#1C65C9', // Azure
        sky: '#1DACFE', // Sky
        ice: '#C2E0FF', // Ice
        mint: '#35DE94', // Mint
        cherry: '#E52B48', // Cherry
        gold: '#F2CC00', // Gold
        coral: '#FF4B26', // Coral
      },
    },
  },
  plugins: [],
}
export default config
