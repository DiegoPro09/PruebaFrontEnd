import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { I18nextProvider } from 'react-i18next';
import i18next from './shared/configs/i18next'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}> {/* Provider de i18next que envuelve a la aplicacion principal para el funcionamiento correcto de las traducciones y tengan acceso a las traducciones y configuraciones */}
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
