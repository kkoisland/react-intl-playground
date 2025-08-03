import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IntlProvider } from 'react-intl';

import enMessages from './locales/en.json';
import jaMessages from './locales/ja.json';

// 現在の言語を指定
const locale = 'en';
const messages = locale === 'en' ? enMessages : jaMessages;

// IntlProviderでアプリをラップ
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
