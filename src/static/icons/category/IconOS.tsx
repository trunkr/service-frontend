import React from 'react';
import { f } from 'styles';

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.1463 1.82031H18.8537C20.5947 1.82031 22 3.16031 22 4.82031V13.8103C22 15.4703 20.5947 16.8103 18.8537 16.8103H5.1463C3.40535 16.8103 2 15.4703 2 13.8103V4.82031C2 3.16031 3.40535 1.82031 5.1463 1.82031ZM17.1757 12.9903C17.4693 12.9903 17.7001 12.7603 17.7001 12.4903V6.15031C17.7001 5.87031 17.4588 5.65031 17.1757 5.65031H6.82433C6.53068 5.65031 6.29995 5.88031 6.29995 6.15031V12.4903C6.29995 12.7703 6.54116 12.9903 6.82433 12.9903H17.1757ZM3.51023 18.7188H20.4898C21.3238 18.7188 22 19.3635 22 20.1587V20.3787C22 21.174 21.3238 21.8187 20.4898 21.8187H3.51023C2.67615 21.8187 2 21.174 2 20.3787V20.1587C2 19.3635 2.67615 18.7188 3.51023 18.7188Z" fill="black"/>
</svg>
`;

const IconOS: React.FC<{ onClick?: VoidFunction; className?: string }> = ({ onClick, className }) => (
  <div css={[f.flex]} className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: SVG }} />
);

export default IconOS;
