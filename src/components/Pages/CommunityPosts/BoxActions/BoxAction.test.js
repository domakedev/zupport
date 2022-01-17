import { render } from '../../../../__test__/test-utils';

// Component
import GOFData from './BoxAction';

const setResults = jest.fn();

test('should be displayed a plus button', () => {
  const component = render(<GOFData setResults={setResults} />);

  component.getByPlaceholderText('Buscar post...');
  component.getByText('Ordenar');
  component.getByText('Filtrar');
});
