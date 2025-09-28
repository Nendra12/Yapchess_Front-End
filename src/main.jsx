import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';                  // Gaya PrimeReact
import 'primeicons/primeicons.css';                                // Ikon
import 'primeflex/primeflex.css';                                  // Flexbox Utility (opsional)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
