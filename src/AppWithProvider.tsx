import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import App from './App';

import enMessages from './locales/en.json';
import jaMessages from './locales/ja.json';

function AppWithProvider() {
  const [locale, setLocale] = useState<'en' | 'ja'>('en');
  const messages = locale === 'en' ? enMessages : jaMessages;

  return (
    // IntlProviderでアプリをラップ
    <IntlProvider locale={locale} messages={messages}>
      <App />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setLocale('en')}>English</button>
        <button onClick={() => setLocale('ja')}>日本語</button>
      </div>
    </IntlProvider>
  );
}

export default AppWithProvider;
