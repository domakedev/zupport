import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../../../../../__test__/test-utils'; // './test-utils';
import '@testing-library/jest-dom';
import answerData from '../../../../../../../mocks/answerData';
import Answer from './Answer';

describe('Unit test for Answer Page', () => {
  test('It should display a picture of the users profile', () => {
    const component = render(<Answer state={answerData[0]} />);
    const userPhoto = component.getByAltText(/userPhoto/i);
    expect(userPhoto).toBeInTheDocument();
  });
  test('It should display the valid response for a post', () => {
    const component = render(<Answer state={answerData[0]} />);
    // screen.debug();
    const answerText = component.getByDisplayValue(
      'Respuesta válida mock 1 😀'
    );
    expect(answerText).toBeInTheDocument();
  });
  test('It should show a more options button', () => {
    const component = render(<Answer state={answerData[0]} />);
    const buttonElement = component.getByRole('button', {
      name: /moreAnswer/i,
    });
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  test('It should show an edit button if the more options button is clicked on a answer', () => {
    // const mockHandler = jest.fn();
    const component = render(<Answer state={answerData[0]} />);
    const buttonClick = component.getByRole('button', {
      name: /moreAnswer/i,
    });
    fireEvent.click(buttonClick);
    const editButton = component.getByRole('button', {
      name: /Editar/i,
    });
    expect(editButton).toBeInTheDocument();
    // expect(mockHandler.mock.calls).toHaveLength(1);
  });
  test('It should show an delete button if the more options button is clicked on a answer', () => {
    // const mockHandler = jest.fn();
    const component = render(<Answer state={answerData[0]} />);
    const buttonClick = component.getByRole('button', {
      name: /moreAnswer/i,
    });
    fireEvent.click(buttonClick);
    const deleteButton = component.getByRole('button', {
      name: /Eliminar/i,
    });
    expect(deleteButton).toBeInTheDocument();
    // expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
