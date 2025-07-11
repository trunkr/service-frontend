import React from 'react';

import { UiComponent } from 'components';

interface Props {
  agree: boolean;
  title: string;
  setAgree: (agree: boolean) => void;
  link: string;
}

function TermsItem({ agree, link, title, setAgree }: Props) {
  return (
    <div css={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '30px' }}>
      <UiComponent.CheckBox uiType="circle" checked={agree} handleCheck={setAgree}>
        <p
          css={(theme) => ({
            fontSize: theme.typography.size.label1,
            fontWeight: theme.typography.weight.medium,
            userSelect: 'none',
          })}
        >
          {title}
          <span
            css={(theme) => ({
              marginLeft: '2px',
              color: theme.color.primary.mint800,
              fontSize: theme.typography.size.label3,
              fontWeight: theme.typography.weight.medium,
            })}
          >
            (필수)
          </span>
        </p>
      </UiComponent.CheckBox>
      <button
        type="button"
        css={(theme) => ({
          textDecoration: 'underline',
          fontWeight: theme.typography.weight.medium,
          fontSize: theme.typography.size.label2,
          color: theme.color.gray.gray900,
        })}
        onClick={() => {
          window.open(link, '__blank');
        }}
      >
        전체보기
      </button>
    </div>
  );
}

export default TermsItem;
