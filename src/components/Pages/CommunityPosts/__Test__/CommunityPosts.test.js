/* eslint-disable import/order */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CommunityPosts from '../CommunityPosts';
import dataPost from '../../../../mocks/dataPost';
import {
  softNumber,
  getPostTime,
} from '../../../../controller/CommunityPostCtr/utilities';

beforeEach(() => {
  render(<CommunityPosts />);
});

const getText = (value = '') => {
  const textElement = screen.getByText(value);
  return textElement;
};
const getRole = (type, value = '') => {
  const buttonElement = screen.getByRole(type, { name: value });
  userEvent.click(buttonElement);
  return buttonElement;
};

describe('welcome you to a community posts page', () => {
  test('It should render the welcome to a community posts page', () => {
    expect(
      getText(/Bienvenid@ a tu comunidad Javascript/i)
    ).toBeInTheDocument();
  });

  test('It should render the statement of the community top helpers', () => {
    expect(
      getText(/Conoce a l@s 5 top helpers de tu comunidad/i)
    ).toBeInTheDocument();
  });
});

describe('Creation of new questions to the community', () => {
  test('It should render a statement to create a post', () => {
    expect(getText(/¿En que deseas ayuda?/i)).toBeInTheDocument();
  });
  test('It should render the statement of the community top', () => {
    expect(getRole('button', /PREGUNTAR/i)).toBeInTheDocument();
  });
});
describe('show all posts from a community', () => {
  test('It should render the title of a post', async () => {
    expect(getText(dataPost[0].postTitle)).toBeInTheDocument();
  });

  test('It should render the description of a post', async () => {
    expect(getText(dataPost[0].postDescription)).toBeInTheDocument();
  });
  test('It should render the points of the post', async () => {
    expect(getText(softNumber(dataPost[0].points))).toBeInTheDocument();
  });
  test('It should render the publication time of the posts', async () => {
    expect(getText(getPostTime(dataPost[0].timePost))).toBeInTheDocument();
  });
});
describe('Comment actions and like posts', () => {
  test('It should render the option to like a post', () => {
    const buttonElement = screen.getAllByRole('button', {
      name: /Te apoyo/i,
    })[0];
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  test('It should render the option to comment on a post', () => {
    const buttonElement = screen.getAllByRole('button', {
      name: /Responder/i,
    })[0];
    userEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
