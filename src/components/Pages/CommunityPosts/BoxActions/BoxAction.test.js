import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// Component
import GOFData from './BoxAction';

const setResults = jest.fn();

test('should be displayed a plus button', () => {
  const component = render(<GOFData setResults={setResults} />);

  component.getByPlaceholderText('Buscar post...');
  component.getByText('Ordenar');
  component.getByText('Filtrar');
});
