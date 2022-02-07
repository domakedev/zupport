// Providers
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import NavButton from './NavButton';

test('render content', () => {
  const title = 'Test text';

  const component = render(
    <MemoryRouter>
      <NavButton titulo={title} />
    </MemoryRouter>
  );
  expect(component.getByText('Test text')).toBeInTheDocument();
});
