import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// Component
import GOFData from './GOFData';

test('should be displayed a plus button', () => {
  const component = render(<GOFData />);

  component.getByPlaceholderText('Buscar comunidad...');
  component.getByText('Ordenar');
  component.getByText('Filtrar');
});
