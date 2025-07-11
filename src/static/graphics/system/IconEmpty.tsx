import React from 'react';
import { f } from 'styles';

const SVG = `
<svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.599 2.58287e-05L7 -5.16574e-06C3.40333 -5.16574e-06 0.5 2.90333 0.5 6.5V36.8333C0.5 40.43 3.40333 43.3333 7 43.3333L26.5 43.3334C28.255 43.3334 29.945 42.6184 31.18 41.3617L39.279 32.3947C40.449 31.1814 41.099 29.5564 41.099 27.8664V6.50003C41.099 2.90336 38.1956 2.58287e-05 34.599 2.58287e-05ZM36.41 26.7214L24.8767 38.873C24.075 39.6964 22.6883 39.133 22.6883 37.9847V27.8664C22.6883 25.483 24.1167 24.5547 26.5 24.5547H35.5C36.6267 24.5547 37.2117 25.9197 36.41 26.7214Z" fill="#E8E8E8"/>
<rect x="10.5" y="8.05469" width="21" height="3" rx="1.5" fill="white"/>
<rect x="10.5" y="15.0547" width="21" height="3" rx="1.5" fill="white"/>
</svg>
`;

const IconEmpty: React.FC<{ className?: string }> = ({ className }) => (
  <div css={f.flex} className={className} dangerouslySetInnerHTML={{ __html: SVG }} />
);

export default IconEmpty;
