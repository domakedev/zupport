// Providers
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../__test__/test-utils';
import '@testing-library/jest-dom/extend-expect';

// Component
import InputBtn from './InputBtn';

test('render content', () => {
  const valueBtn = 'Test text';

  const component = render(
    <MemoryRouter>
      <InputBtn valueBtn={valueBtn} />
    </MemoryRouter>
  );
  expect(component.getByText('Test text')).toBeInTheDocument();
});

test('clicking the button calls event handler', () => {
  const valueBtn = 'Action';
  const mockHandler = jest.fn();
  const component = render(
    <MemoryRouter>
      <InputBtn valueBtn={valueBtn} EnviarDataLogin={mockHandler} />
    </MemoryRouter>
  );

  const button = component.getByText('Action');
  fireEvent.click(button);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
