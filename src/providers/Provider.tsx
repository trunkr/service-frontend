import React, { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'stores';
import { theme, global } from 'styles';
import QueryProvider from './QueryProvider';
import { UiComponent } from 'components';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryProvider>
              {children}
              <UiComponent.Toast />
            </QueryProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default AppProvider;
