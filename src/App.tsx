import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';

function App() {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    }
  }, []);

  return (
    <React.Suspense fallback={null}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
