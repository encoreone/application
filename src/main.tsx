import { createRoot } from 'react-dom/client';

import App from './app/ui/index.tsx';

import './mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render( <App /> );
