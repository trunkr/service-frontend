import SignupImage from './SignupImage';
import { useState } from 'react';
import SignupName from './SignupName';

export interface SignupProps {
  setSignupState: React.Dispatch<React.SetStateAction<'Nickname' | 'Image'>>;
  setNickName: React.Dispatch<React.SetStateAction<string>>;
  nickname: string;
}

// @todo: 프로필 이미지 프론트에서 들고 있기, state 넘길때 상태관리 생각
export const Signup = () => {
  const [signupState, setSignUpState] = useState<'Nickname' | 'Image'>('Nickname');
  const [nickname, setNickName] = useState<string>('');
  console.log(signupState);
  if (signupState == 'Nickname') {
    return <SignupName setSignupState={setSignUpState} setNickName={setNickName} nickname={nickname} />;
  } else {
    return <SignupImage setSignupState={setSignUpState} nickname={nickname} setNickName={setNickName} />;
  }
};

export default Signup;
