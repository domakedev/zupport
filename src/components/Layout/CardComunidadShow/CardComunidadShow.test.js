import { render } from '../../../__test__/test-utils';

// Component
import CardComunidadShow from './CardComunidadShow';

test('render content', () => {
  const title = 'Hola desde Test';
  const users = 100;
  const checks = 12;
  const image = 'ruta de imagen';

  const component = render(
    <CardComunidadShow
      title={title}
      users={users}
      checks={checks}
      image={image}
    />
  );
  component.getByText('Hola desde Test');
});
