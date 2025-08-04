import { useIntl } from 'react-intl';

function IntlHookExample() {
  const intl = useIntl();

  const greeting = intl.formatMessage({ id: 'greeting' }, { name: 'Keiko' });
  const messageCount = intl.formatMessage({ id: 'messages' }, { count: 5 });

    const today = new Date();
  const formattedDate = intl.formatDate(today, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  const formattedNumber = intl.formatNumber(1234567.89);
  const formattedCurrency = intl.formatNumber(99.99, {
    style: 'currency',
    currency: 'JPY',
  });

  return (
    <div>
      <h2>useIntlで表示：</h2>
      <p>{greeting}</p>
      <p>{messageCount}</p>
      <p>日付: {formattedDate}</p>
      <p>数値: {formattedNumber}</p>
      <p>通貨: {formattedCurrency}</p>
    </div>
  );
}

export default IntlHookExample;
