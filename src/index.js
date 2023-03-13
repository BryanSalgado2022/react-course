import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Las props se pasan desde el app como propiedades a continuacion
  //<App propiedades="Esto es una propiedad" />
  // si se abre y se cierra un componente, se pueden enviar propiedades como a continuacion
  /*<App>
    Esto es una propiedad Children
  </App>*/
  <React.StrictMode>
    <App
    />
  </React.StrictMode>
);

