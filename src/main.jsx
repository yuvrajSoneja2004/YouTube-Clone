import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/globalContext';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-v8jrao5e6b41otbz.us.auth0.com"
      clientId='IKbIrDfW24x1VtBYBD5LJDBKXYmTX6il'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <GlobalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
