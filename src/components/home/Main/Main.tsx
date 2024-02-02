import React from 'react';
import { wrap } from './style';

import Hero from './Hero';
import Gpt from './Gpt';
import Category from './Category';
import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';

function Main() {
  const { isLoading } = useCheckSignin();

  return (
    <>
      <main css={wrap}>
        <Hero />
        <Gpt />
        <Category />
      </main>
      {isLoading && <UiComponent.Loading />}
    </>
  );
}

export default Main;
