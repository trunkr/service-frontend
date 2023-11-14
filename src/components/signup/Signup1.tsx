import Text from '@public/assets/text/Text';
import PrimaryButton from '../commons/buttons/capsuleButton/primaryButton/PrimaryButton';
import * as styles from './Signup.style';
import { useForm } from 'react-hook-form';
import { COLORS } from '@public/assets/colors/color';
import CheckboxOn from '@public/icons/System/ic_check_bold.svg';
import CheckboxOff from '@public/icons/System/Check Box.svg';
import { useState } from 'react';
import { useGetMemberCheckNickname } from '@/hooks/useGetMemberCheckNickname';
import { ErrorTextInput } from '../commons/textInput/textField/TextField.style';

export const Signup1 = () => {
  const { register, watch, handleSubmit } = useForm();
  const [checkbox, setCheckbox] = useState(false);
  const [nickname, setNickname] = useState<string>('');
  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const onCheckboxClick = () => {
    setCheckbox(!checkbox);
  };
  const { data: checkNicknameData } = useGetMemberCheckNickname(nickname);

  const onSubmit = (data: any) => {
    console.log(data);
    const nameVal = data.name;
    setNickname(nameVal);
    if (checkNicknameData?.payload == false) {
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
              <ErrorTextInput focus="FOCUS" backgroundColor={COLORS.gray.white} textSize="MEDIUM" />
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
export default Signup1;
