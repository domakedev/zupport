import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// Component
import CommunitieAddCard from './CommunitieAddCard';

test('render content', () => {
  const title = 'Recetas de Cocina';
  const users = 100;
  const checks = 12;
  const image = 'ruta de imagen';

  const component = render(
    <CommunitieAddCard
      title={title}
      users={users}
      checks={checks}
      image={image}
    />
  );

  // console.log(component);

  component.getByText('Recetas de Cocina');
  component.getByText('Unirme');
});
