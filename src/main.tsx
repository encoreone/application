import { createRoot } from 'react-dom/client';

import App from './app/ui/index.tsx';

const rootElement = document.getElementById('root')!;

import '@telegram-apps/telegram-ui/dist/styles.css';

createRoot(rootElement).render( <App /> );
