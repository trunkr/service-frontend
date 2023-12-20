import { useState, useEffect } from 'react';

const Main1 = () => {
  const [hasWindow, setHasWindow] = useState(false);
  console.log(hasWindow);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, [hasWindow]);

  return (
    <>
      {hasWindow && (
        <video autoPlay loop style={{ width: '500px', height: '500px' }}>
          <source src="'https://trunkr-bucket.s3.ap-northeast-2.amazonaws.com/53fa683a-a878-4517-b943-de849cc4d683.mp4'" />
        </video>
      )}
    </>
  );
};
export default Main1;
