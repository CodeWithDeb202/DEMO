import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';
import './styles/error.css';

import { AuthProvider } from './context/Auth/AuthProvider.jsx';
import App from './App.jsx';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <AuthProvider>

      <App />

      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

    </AuthProvider>

  </BrowserRouter>,
)
