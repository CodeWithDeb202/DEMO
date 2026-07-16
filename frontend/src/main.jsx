import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

import { AuthProvider } from './context/Auth';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <AuthProvider>

      <App />

    </AuthProvider>
    
  </BrowserRouter>,
)
