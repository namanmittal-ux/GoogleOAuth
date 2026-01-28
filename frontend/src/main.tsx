import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="59404393463-14b9uouu13a1aefu3bqggkcja2v65v2h.apps.googleusercontent.com" >
    <App />
  </GoogleOAuthProvider>
)
