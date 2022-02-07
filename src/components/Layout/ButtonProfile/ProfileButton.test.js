// Providers
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import ProfileButton from './ProfileButton';

test('render button', () => {
  const component = render(
    <MemoryRouter>
      <ProfileButton />
    </MemoryRouter>
  );
  // Boton Visible
  expect(component.getByRole('button')).toBeInTheDocument();
});

test('button is visible', () => {
  const component = render(
    <MemoryRouter>
      <ProfileButton />
    </MemoryRouter>
  );
  // Boton Visible
  expect(component.getByRole('button')).toBeVisible();
});

test('render name', () => {
  const currentUser = { fullname: 'Daniel Ochoa' };

  const component = render(
    <MemoryRouter>
      <ProfileButton currentUser={currentUser} />
    </MemoryRouter>
  );
  expect(component.getByText('Daniel')).toBeInTheDocument();
});
