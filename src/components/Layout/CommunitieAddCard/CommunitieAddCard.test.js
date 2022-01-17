import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';

// Component
import CommunitieAddCard from './CommunitieAddCard';

test('render content', () => {
  const title = 'Recetas de Cocina';
  const users = 100;
  const checks = 12;
  const image = 'ruta de imagen';

  const component = render(
    <MemoryRouter>
      <CommunitieAddCard
        title={title}
        users={users}
        checks={checks}
        image={image}
      />
    </MemoryRouter>
  );
  component.getByText('Recetas de Cocina');
});
