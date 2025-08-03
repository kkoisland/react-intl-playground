import { FormattedMessage, FormattedDate, FormattedNumber, FormattedRelativeTime } from 'react-intl';


function App() {
  const today = new Date();
  const minutesAgo = -3; // 過去3分（負の値）

  return (
    <div>
      {/* FormattedMessage */}
      <h1>
        <FormattedMessage id="greeting" values={{ name: 'Alice' }} />
      </h1>
      <p>
        <FormattedMessage id="messages" values={{ count: 5 }} />
      </p>

      {/* FormattedDate */}
      <p>
        <FormattedDate
          value={today}
          year="numeric"
          month="long"
          day="2-digit"
        />
      </p>

      {/* FormattedNumber 数値・通貨表示 */}
      <p>
        <FormattedNumber value={1234567.89} />
      </p>
      <p>
        <FormattedNumber value={99.99} style="currency" currency="USD" />
      </p>

      {/* FormattedRelativeTime（相対時間） */}
      <p>
        <FormattedRelativeTime value={minutesAgo} unit="minute" />
      </p>
    </div>
  );
}
export default App;