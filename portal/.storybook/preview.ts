import { addDecorator } from '@storybook/react';
import { MyContextProvider } from '../src/context/MyContext';

// Add any other global decorators here
addDecorator((story) => (
  <MyContextProvider>
    {story()}
  </MyContextProvider>
));
