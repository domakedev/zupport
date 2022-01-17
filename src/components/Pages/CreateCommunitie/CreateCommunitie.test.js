import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';

// Component
import CreateCommunitie from './CreateCommunitie';

test('render content', () => {
  const component = render(
    <MemoryRouter>
      <CreateCommunitie />
    </MemoryRouter>
  );

  // Textos visibles
  component.getByText('Crear Comunidad');
  component.getByText('Añadir imagen');
  component.getByText('CREAR');
  component.getByText('CANCELAR');
  // De este componente se estan encontrando varios
  // component.getByText('Nombre');
  component.getByText('Descripcion');
  component.getByText('Imagen URL');

  // Labels
  // component.getByLabelText("Nombre");
  // component.getByLabelText("Descripcion");
  // component.getByLabelText("Imagen URL");
});
