// Providers
import { MemoryRouter } from 'react-router-dom';
// import { fireEvent } from '@testing-library/react';
// import { useState } from 'react';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import InputText from './InputText';

test('render content', () => {
  const valueInpt = { check: false, field: 'Test text' };

  const component = render(
    <MemoryRouter>
      <InputText state={valueInpt} />
    </MemoryRouter>
  );
  expect(component.getByDisplayValue('Test text')).toBeInTheDocument();
});

// test('test input', () => {
//   const [state, setState] = useState({ check: false, field: 'Test text' });
//   const label = 'Action';

//   const component = render(
//     <MemoryRouter>
//       <InputText state={state} inputName={label} changeState={setState} />
//     </MemoryRouter>
//   );
//   const input = component.getByDisplayValue('Test text');
//   fireEvent.change(input, { target: { value: '23' } });
//   expect(input.value).toBe('$23');
// });
