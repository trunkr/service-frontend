import SignupImage from './SignupImage';
import { useState } from 'react';
import SignupName from './SignupName';

export interface SignupProps {
  setSignupState: React.Dispatch<React.SetStateAction<'Nickname' | 'Image'>>;
}

// @todo: 프로필 이미지 프론트에서 들고 있기, state 넘길때 상태관리 생각
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
