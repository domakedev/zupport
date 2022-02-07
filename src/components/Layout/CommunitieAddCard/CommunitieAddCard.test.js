import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import CommunitieAddCard from './CommunitieAddCard';

test('render content', () => {
  const title = 'Recetas de Cocina';
  const users = ['daniel', 'fernando'];
  const checks = [
    { id: 1, resolved: true },
    { id: 2, resolved: false },
  ];
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
  expect(component.getByText('Recetas de Cocina')).toBeInTheDocument();
});

test('function resolved percentage', () => {
  const title = 'Recetas de Cocina';
  const checks = [
    { id: 1, resolved: true },
    { id: 2, resolved: false },
  ];

  const component = render(
    <MemoryRouter>
      <CommunitieAddCard title={title} checks={checks} />
    </MemoryRouter>
  );
  expect(component.getByText('50%')).toBeInTheDocument();
});
