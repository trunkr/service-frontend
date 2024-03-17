import React from 'react';
import { f } from 'styles';

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16379 2H17.8309C19.5758 2 20.9842 3.41053 20.9842 5.15789V6.75789C20.9842 7.05263 20.7425 7.29473 20.4482 7.29473H3.53606C3.24175 7.29473 3 7.05263 3 6.75789V5.15789C3 3.41053 4.40847 2 6.15328 2H6.16379ZM17.8362 22H6.16905C4.42424 22 3.01577 20.5895 3.01577 18.8421V17.2421C3.01577 16.9474 3.25752 16.7053 3.55182 16.7053H20.4639C20.7582 16.7053 21 16.9474 21 17.2421V18.8421C21 20.5895 19.5915 22 17.8467 22H17.8362ZM3.55169 9.35608H20.4533C20.7494 9.35608 20.9893 9.59643 20.9893 9.89292V14.1034C20.9893 14.3999 20.7494 14.6403 20.4533 14.6403H3.55169C3.25563 14.6403 3.01562 14.3999 3.01562 14.1034V9.89292C3.01562 9.59643 3.25563 9.35608 3.55169 9.35608Z" fill="black"/>
</svg>
`;

const IconDataBase: React.FC<{ onClick?: VoidFunction; className?: string }> = ({ onClick, className }) => (
  <div css={[f.flex]} className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: SVG }} />
);

export default IconDataBase;
