import React from 'react';
import { wrap, item, itemWrap, pageTitle, iconStyle, checkIcon } from './style';
import icCheck from 'static/icons/system/ic_check_circle_on.svg';
import { PROFILE_DATA } from 'data/profile';
import { UiComponent } from 'components';

interface Props {
  profile: number;
  handleProfile: (num: number) => void;
  handleSubmit: () => void;
}

function Profile({ profile, handleProfile, handleSubmit }: Props) {
  return (
    <section css={wrap}>
      <h1 css={pageTitle}>프로필 사진을 선택해주세요</h1>
      <div css={itemWrap}>
        {PROFILE_DATA.map((src, i) => (
          <div key={i} css={item} onClick={() => handleProfile(i)}>
            <img src={src} alt="" css={iconStyle} />
            {profile === i && <img src={icCheck} alt="" css={checkIcon} width={40} />}
          </div>
        ))}
      </div>
      <UiComponent.Button color="primary" size="large" css={{ marginTop: '100px' }} onClick={handleSubmit}>
        확인
      </UiComponent.Button>
    </section>
  );
}

export default Profile;
