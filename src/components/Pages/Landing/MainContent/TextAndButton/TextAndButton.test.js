import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../../../__test__/test-utils';

import TextAndButton from './TextAndButton';

test('render content', () => {
  // eslint-disable-next-line
  const component = render(
    <MemoryRouter>
      <TextAndButton />
    </MemoryRouter>
  );

  // console.log(component);
});
