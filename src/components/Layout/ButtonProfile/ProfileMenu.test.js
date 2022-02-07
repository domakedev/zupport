// Providers
import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import ProfileMenu from './ProfileMenu';

test('render profile, help and language', () => {
  const component = render(
    <MemoryRouter>
      <ProfileMenu />
    </MemoryRouter>
  );
  // Textos visibles
  expect(component.getByText('Perfil')).toBeInTheDocument();
  expect(component.getByText('Ayuda')).toBeInTheDocument();
  expect(component.getByText('Idioma')).toBeInTheDocument();
});

test('render config and logout', () => {
  const component = render(
    <MemoryRouter>
      <ProfileMenu />
    </MemoryRouter>
  );
  // Textos visibles
  expect(component.getByText('Configuración')).toBeInTheDocument();
  expect(component.getByText('Cerrar Sesión')).toBeInTheDocument();
});

test('href of lang and help', () => {
  const component = render(
    <MemoryRouter>
      <ProfileMenu />
    </MemoryRouter>
  );
  // Redirect link of href
  expect(component.getByText('Idioma').href).toBe('http://localhost/lang');
  expect(component.getByText('Ayuda').href).toBe('http://localhost/help');
});
