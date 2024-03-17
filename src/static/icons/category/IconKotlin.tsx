import React from 'react';
import { f } from 'styles';

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.16 21.99H5.84998C4.27998 21.99 3 20.6507 3 18.9915V4.9985C3 3.33933 4.26998 2 5.84998 2H18.16C20.82 2 22.01 5.51824 19.96 7.29735L13.86 11.5952C13.58 11.7951 13.58 12.2049 13.86 12.4048L19.96 16.7026C22.01 18.4818 20.82 22 18.16 22V21.99Z" fill="black"/>
</svg>
`;

const IconKotlin: React.FC<{ onClick?: VoidFunction; className?: string }> = ({ onClick, className }) => (
  <div css={[f.flex]} className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: SVG }} />
);

export default IconKotlin;
