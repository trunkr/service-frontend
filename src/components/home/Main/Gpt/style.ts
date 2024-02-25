import { CSSObject } from '@emotion/react';

const wrap: CSSObject = { flexDirection: 'row', justifyContent: 'space-between', padding: '0 181px 0 202px' };

const mWrap: CSSObject = {
  flexDirection: 'column',
  alignItems: 'center',
};

const playerStyle = { width: '525px', height: '436px', margin: '165px 0 150px 0' };

const mPlayerStyle = { width: '100%', maxWidth: '335px', margin: '30px 0 80px' };

export { wrap, mWrap, playerStyle, mPlayerStyle };
