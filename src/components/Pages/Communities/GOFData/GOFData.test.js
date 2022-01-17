import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '../../../../__test__/test-utils';

// Component
import GOFData from './GOFData';

test('should be displayed a plus button', () => {
  const component = render(<GOFData />);

  component.getByPlaceholderText('Buscar comunidad...');
  component.getByText('Ordenar');
  component.getByText('Filtrar');
});
