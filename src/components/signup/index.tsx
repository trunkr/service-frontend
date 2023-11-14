import Signup1 from './Signup1';
import { useState } from 'react';
export const Signup = () => {
  const [step, setStep] = useState(['name', 'profileImg'] as const);
  return <Signup1 />;
};

export default Signup;
