import Text from '@public/assets/text/Text';
import PrimaryButton from '../commons/buttons/capsuleButton/primaryButton/PrimaryButton';
import * as styles from './Signup.style';
import { useForm } from 'react-hook-form';
import { COLORS } from '@public/assets/colors/color';
import CheckboxOn from '@public/icons/System/CheckboxOn.svg';
import CheckboxOff from '@public/icons/System/Check Box.svg';
import { useState } from 'react';
import getMemberCheckNickname from '@/apis/auth/getMembersCheckNickname';
import { SignupProps } from '.';

export const SignupName = ({ setSignupState, setNickName }: SignupProps) => {
  const { register, watch, handleSubmit } = useForm();
  const [nickName, setNickname] = useState<string>('');
  const [checkbox, setCheckbox] = useState(false);
  const [nicknameError, setNicknameError] = useState<boolean>(false);

  const onCheckboxClick = () => {
    setCheckbox(!checkbox);
  };
  const onSubmit = async (data) => {
    console.log(data);
    const nameVal = data.name as string;
    const res = await getMemberCheckNickname(nameVal);
    console.log(res.payload);
    if (res.payload == false) {
      setNickname(nameVal);
      setNickName(nameVal);
      setNicknameError(false);
      setSignupState('Image');
    } else {
      setNickname(nameVal);
      setNicknameError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <styles.Container>
        <div>
          <Text color={COLORS.gray.black} textStyleName="Title1" fontFamily="Pretendard">
            회원가입
          </Text>
        </div>
        <styles.NameContainer>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
              닉네임
            </Text>
            <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
              한글,영문 10자 이하로 입력해주세요 (12자)
            </Text>
          </div>
          {nicknameError ? (
            <div>
              <styles.ErrorInput
                type="text"
                placeholder={nickName}
                {...register('name', { required: true, maxLength: 12 })}
              />
              <Text color={COLORS.error.red600} textStyleName="Label4M" fontFamily="Pretendard">
                중복된 닉네임이라 사용할 수 없습니다.
              </Text>
            </div>
          ) : (
            <styles.NameInput
              type="text"
              placeholder="닉네임을 입력해주세요"
              {...register('name', { required: true, maxLength: 12 })}
            />
          )}
        </styles.NameContainer>
        <styles.AgreeContainer>
          <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
            약관동의
          </Text>
          <styles.AgreeCheckbox>
            <div style={{ cursor: 'pointer' }} onClick={onCheckboxClick}>
              {checkbox ? <CheckboxOn /> : <CheckboxOff />}
            </div>
            <Text color={COLORS.gray.black} textStyleName="Label3B" fontFamily="Pretendard">
              Trunkr 이용약관에 동의합니다
            </Text>
          </styles.AgreeCheckbox>
        </styles.AgreeContainer>
        <styles.BoxContainer>
          {watch('name') && checkbox ? (
            <PrimaryButton size="LARGE" msg="완료" state="DEFAULT" />
          ) : (
            <PrimaryButton size="LARGE" msg="완료" state="DISABLED" />
          )}
        </styles.BoxContainer>
      </styles.Container>
    </form>
  );
};
export default SignupName;
