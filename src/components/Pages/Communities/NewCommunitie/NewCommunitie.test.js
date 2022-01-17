import { MemoryRouter } from 'react-router-dom';
import { render } from '../../../../__test__/test-utils';

// Component
import NewCommunitie from './NewCommunitie';

test('should be displayed a plus button', () => {
  const component = render(
    <MemoryRouter>
      <NewCommunitie />
    </MemoryRouter>
  );

  component.getByText('Crear nueva Comunidad');
});
