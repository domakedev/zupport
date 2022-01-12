import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import TextAndButton from './TextAndButton';

test('render content', () => {
  // eslint-disable-next-line
  const component = render(<TextAndButton />);

  // console.log(component);
});
