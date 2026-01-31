import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { preconnectFonts, loadFonts } from 'src/utils/LoadFonts'
import App from './App.tsx'

import 'src/styles/main.scss'

// load fonts
// preconnectFonts()
// setTimeout(() => {
//   loadFonts()
// }, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
