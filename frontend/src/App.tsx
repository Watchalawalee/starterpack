import React, { useEffect, useState } from 'react';
import LoginPage from './pages/login';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(json => setData(json.message));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      < LoginPage />
    </div>
  );
}

export default App;
