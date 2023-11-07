import Text from '@public/assets/text/Text';
import PrimaryButton from '../commons/buttons/capsuleButton/primaryButton/PrimaryButton';
import * as styles from './Signup.style';
import { useForm } from 'react-hook-form';
import { COLORS } from '@public/assets/colors/color';
import Checkbox from '@public/icons/System/Check Box.svg';

export const Signup1 = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <styles.Container>
        <div>
          <Text color={COLORS.gray.black} textStyleName="Title1" fontFamily="Pretendard">
            회원가입
          </Text>
        </div>
        <styles.NameContainer>
          <div>
            <Text color={COLORS.gray.black} textStyleName="Title5" fontFamily="Pretendard">
              닉네임
            </Text>
            <Text color={COLORS.gray.gray600} textStyleName="Label4B" fontFamily="Pretendard">
              한글,영문 10자 이하로 입력해주세요 (12자)
            </Text>
          </div>
          <styles.NameInput
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register('name', { required: true, maxLength: 12 })}
          />
        </styles.NameContainer>
        <styles.AgreeContainer>
          <Text color={COLORS.gray.black} textStyleName="Label1B" fontFamily="Pretendard">
            약관동의
          </Text>
          <styles.AgreeCheckbox>
            <Checkbox />
            <Text color={COLORS.gray.black} textStyleName="Label3B" fontFamily="Pretendard">
              Trunkr 이용약관에 동의합니다
            </Text>
          </styles.AgreeCheckbox>
        </styles.AgreeContainer>
        <styles.BoxContainer>
          <PrimaryButton size="LARGE" msg="완료" state="DISABLED" />
        </styles.BoxContainer>
      </styles.Container>
    </div>
  );
};
export default Signup1;
