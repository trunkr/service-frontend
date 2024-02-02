import React from 'react';

import { HomeComponent, UiComponent } from 'components';
import { useAppSelector } from 'stores';

function Home() {
  const { auth } = useAppSelector((state) => state.auth);

  return (
    <>
      {auth?.token.accessToken ? <HomeComponent.Dashboard /> : <HomeComponent.Main />}
      <UiComponent.Footer />
    </>
  );
}

export default Home;
