import * as styles from './Signup.style';
import { COLORS } from '@public/assets/colors/color';
import Text from '@public/assets/text/Text';
import Profile1 from '@public/graphics/Graphics/Profile 1.svg';
import Profile2 from '@public/graphics/Graphics/Profile 2.svg';
import Profile3 from '@public/graphics/Graphics/Profile 3.svg';
import Profile4 from '@public/graphics/Graphics/Profile 4.svg';
import Profile5 from '@public/graphics/Graphics/Profile 5.svg';
import Profile6 from '@public/graphics/Graphics/Profile 6.svg';
import Profile7 from '@public/graphics/Graphics/Profile 7.svg';
import Profile8 from '@public/graphics/Graphics/Profile 8.svg';
import CheckboxOn from '@public/icons/System/CheckboxOn.svg';
import { useState } from 'react';

import PrimaryButton from '../commons/buttons/capsuleButton/primaryButton/PrimaryButton';
import { SignupProps } from '.';

/*
프로필 이미지 타입을 const 로 저장
 */
const ProfileType = {
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
  P5: 'P5',
  P6: 'P6',
  P7: 'P7',
  P8: 'P8',
} as const;

const SignupImage = ({ setSignupState }: SignupProps) => {
  const [checkbox, setCheckbox] = useState<keyof typeof ProfileType>(ProfileType.P1);
  console.log(checkbox);
  const onCheckboxClick = (profileType: keyof typeof ProfileType) => {
    setCheckbox(profileType);
  };
  return (
    <styles.Signup2Container>
      <Text color={COLORS.gray.black} textStyleName="Title1" fontFamily="Pretendard">
        프로필 사진을 선택해주세요
      </Text>
      <styles.ProfileImgContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P1)}>
            <styles.ProfileImg>
              <Profile1 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P1' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P2)}>
            <styles.ProfileImg>
              <Profile2 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P2' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P3)}>
            <styles.ProfileImg>
              <Profile3 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P3' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P4)}>
            <styles.ProfileImg>
              <Profile4 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P4' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
      </styles.ProfileImgContainer>
      <styles.ProfileImgContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P5)}>
            <styles.ProfileImg>
              <Profile5 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P5' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P6)}>
            <styles.ProfileImg>
              <Profile6 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P6' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P7)}>
            <styles.ProfileImg>
              <Profile7 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P7' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
        <styles.ProfileImgItemContainer>
          <styles.CheckboxContainer onClick={() => onCheckboxClick(ProfileType.P8)}>
            <styles.ProfileImg>
              <Profile8 />
            </styles.ProfileImg>
            <styles.Checkbox>{checkbox == 'P8' ? <CheckboxOn /> : null}</styles.Checkbox>
          </styles.CheckboxContainer>
        </styles.ProfileImgItemContainer>
      </styles.ProfileImgContainer>

      <PrimaryButton size="LARGE" msg="완료" state="DEFAULT" />
    </styles.Signup2Container>
  );
};

export default SignupImage;
