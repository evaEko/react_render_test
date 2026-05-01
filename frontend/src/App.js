import React, { useEffect, useState } from 'react';

const App = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch('/api/health', { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          setStatus('I am healthy');
        } else {
          setStatus('I got an error');
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          setStatus('I am down');
        } else {
          setStatus('I got an error');
        }
      })
      .finally(() => clearTimeout(timeout));

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', fontSize: 24, marginTop: 40 }}>
      {status}
    </div>
  );
};

export default App;
