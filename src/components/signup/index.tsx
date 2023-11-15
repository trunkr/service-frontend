import SignupImage from './SignupImage';
import { useState } from 'react';
import SignupName from './SignupName';

export interface SignupProps {
  setSignupState: React.Dispatch<React.SetStateAction<'Nickname' | 'Image'>>;
}

// @todo
export const Signup = () => {
  const [signupState, setSignUpState] = useState<'Nickname' | 'Image'>('Nickname');
  console.log(signupState);
  if (signupState == 'Nickname') {
    return <SignupName setSignupState={setSignUpState} />;
  } else {
    return <SignupImage setSignupState={setSignUpState} />;
  }
};

export default Signup;
