import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './navigator/MainTabs';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;