import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './presentation/App.tsx'
import { Provider } from "react-redux";
import { store } from "./infrastructure/store/index.ts";
import { PrimeReactProvider } from 'primereact/api';

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </StrictMode>,
)
